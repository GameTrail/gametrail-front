import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@/components/Landing/MainSection/styles';
import { LoginLottie } from '@/components/Lotties';
import { useGameTrail } from '@/hooks';
import { normalizeUser } from '@/models/User/types';
import {
  LoginContainer, Container, Title, LoginForm, Label, Input, ErrorContainer,
} from './styles';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { handleSetUser, handleSetToken } = useGameTrail();
  const [userLoading, setUserLoading] = useState<boolean>(true);

  const [message, setMessage] = useState<string>('');

  const handleLogin = (gametrailUsername: string, gametrailPassword: string) => {
    const API_URL = 'http://127.0.0.1:/api/auth/login/';

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ gametrailUsername, gametrailPassword }),
    };

    const getToken = async () => {
      try {
        const response = await fetch(API_URL, options);
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
      const API_URL_USER = 'http://127.0.0.1:3000/api/user/';
      const optionsUser = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      };
      try {
        const response = await fetch(API_URL_USER, optionsUser);
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
      }
    };
    getUser();
  };

  const router = useRouter();

  const onPressLogin = (e: any) => {
    e.preventDefault();
    handleLogin(username, password);
    if (!userLoading && !!message) {
      router.push('/home');
    } else {
      setMessage(message);
    }
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
