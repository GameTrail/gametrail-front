import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@/components/Landing/MainSection/styles';
import { LoginLottie } from '@/components/Lotties';
import { useGameTrail } from '@/hooks';
import { normalizeUser } from '@/models/User/types';
import {
  LoginContainer, Container, Title, LoginForm, Label, Input, ErrorContainer,
} from './styles';

const LOGIN_AUTH_URL = 'http://localhost:3000/api/auth/login/';
const USER_DATA_URL = 'http://localhost:3000/api/user/';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { handleSetUser, handleSetToken } = useGameTrail();
  const [userLoading, setUserLoading] = useState<boolean>(true);
  const [message, setMessage] = useState<string>('');

  const router = useRouter();

  const handleLogin = (gametrailUsername: string, gametrailPassword: string) => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ gametrailUsername, gametrailPassword }),
    };

    const getToken = async () => {
      try {
        const response = await fetch(LOGIN_AUTH_URL, options);
        if (response.ok) {
          const data = await response.json();
          handleSetToken(data.token);
          localStorage.setItem('token', data.token);
          return data.token;
        }
        setUserLoading(false);
        setMessage('No se puede iniciar sesión con estas credenciales');
      } catch (error) {
        setUserLoading(false);
        setMessage('No se puede iniciar sesión con estas credenciales');
      }
      return null;
    };

    const getUser = async () => {
      const token = await getToken();
      const data = {
        token,
      };
      const optionsUser = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      };
      try {
        const response = await fetch(USER_DATA_URL, optionsUser);
        if (response.ok) {
          const dataUser = await response.json();
          const user = normalizeUser(dataUser, token);
          handleSetUser(user);
          setMessage('');
          localStorage.setItem('user', JSON.stringify(user));
        } else {
          setMessage('No se puede iniciar sesión con estas credenciales');
        }
        setUserLoading(false);
      } catch (error) {
        setUserLoading(false);
        setMessage('No se puede iniciar sesión con estas credenciales');
      } finally {
        setUserLoading(false);
        router.push('/');
      }
    };
    getUser();
  };

  const onPressLogin = (e: any) => {
    e.preventDefault();
    handleLogin(username, password);
  };

  return (
    <LoginContainer>
      <LoginLottie />
      <LoginForm>
        <Title>
          Inicia sesión en GameTrail
        </Title>
        {!!message && <ErrorContainer>{message}</ErrorContainer>}
        <Container>
          <Label>
            Nombre de usuario
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
            Contraseña
            <Input
              type="password"
              name="Contraseña"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Label>
        </Container>
        <Button primary onClick={onPressLogin}>Iniciar sesión</Button>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
