import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@/components/Landing/MainSection/styles';
import { LoginLottie } from '@/components/Lotties';
import useLanguage from '@/i18n/hooks';
import { minimizeUserCookie, normalizeUserCookie } from '@/models/User/types';
import { setMinCookie } from '@/utils/login';
import {
  LoginContainer,
  Container,
  Title,
  LoginForm,
  Label,
  Input,
  ErrorContainer,
} from './styles';
import type { UserCredentials } from './types';

const URL_LOGIN = 'gametrail-backend-s4-production.up.railway.app/api/auth/login';
const URL_USER = 'gametrail-backend-s4-production.up.railway.app/api/user/';
const LOGIN_ERROR = 'Error al inicial sesión, comprueba tus credenciales.';

const Login = () => {
  const { t } = useLanguage();
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const getUser = async (userId: number) => {
    const id = String(userId);
    const URL = URL_USER + id;
    try {
      const response = await fetch(URL, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        setLoginError(LOGIN_ERROR);
        return { user: null, error: loginError };
      }

      const data = await response.json();
      return { user: data, error: null };
    } catch (err) {
      setLoginError(LOGIN_ERROR);
      return { user: null, error: loginError };
    }
  };

  const onLogin = async (userCredentials: UserCredentials) => {
    try {
      const response = await fetch(URL_LOGIN, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userCredentials),
      });
      if (!response.ok) {
        setLoginError(LOGIN_ERROR);
        return;
      }
      const data = await response.json();
      const userId = data.user_id;
      const { user, error } = await getUser(userId);
      if (error) {
        setLoginError(LOGIN_ERROR);
        return;
      }
      const userCookie = normalizeUserCookie(user, data.token);
      const MinUser = minimizeUserCookie(userCookie, userCookie.auth_token);
      setMinCookie('user', MinUser, 7);
      setLoginError('');
      router.push('/home');
    } catch (err) {
      setLoginError(LOGIN_ERROR);
    } finally {
      setUsername('');
      setPassword('');
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = { username, password };
    onLogin(user);
  };

  return (
    <LoginContainer>
      <LoginLottie />
      <LoginForm onSubmit={handleSubmit}>
        <Title>
          {t('login_to_gametrail')}
        </Title>
        {!!loginError && <ErrorContainer>{loginError}</ErrorContainer>}
        <Container>
          <Label>
            {t('username')}
            <Input
              type="text"
              name="Nombre de usuario"
              placeholder="Nombre de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Label>
        </Container>
        <Container>
          <Label>
            {t('password')}
            <Input
              type="password"
              name="Contraseña"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Label>
        </Container>
        <Button primary type="submit">{t('login')}</Button>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
