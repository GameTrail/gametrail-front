import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@/components/Landing/MainSection/styles';
import { LoginLottie } from '@/components/Lotties';
import { useGameTrail } from '@/hooks';
import { normalizeUser } from '@/models/User/types';
import {
  LoginContainer,
  Container,
  Title,
  LoginForm,
  Label,
  Input,
  ErrorContainer,
} from './styles';

const LOGIN_AUTH_URL = 'https://gametrail-backend-production.up.railway.app/api/auth/login';
const USER_DATA_URL = 'https://gametrail-backend-production.up.railway.app/api/user';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<string>('');
  const { handleSetUser, handleSetToken } = useGameTrail();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleLogin = async () => {
    setIsLoading(true);
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password, username }),
    };

    try {
      const response = await fetch(LOGIN_AUTH_URL, options);
      if (response.ok) {
        const data = await response.json();
        handleSetToken(data.token);
        localStorage.setItem('token', data.token);

        const userOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token: data.token }),
        };
        const userResponse = await fetch(USER_DATA_URL, userOptions);

        if (userResponse.ok) {
          const userData = await userResponse.json();
          const user = normalizeUser(userData, data.token);
          handleSetUser(user);
          localStorage.setItem('user', JSON.stringify(user));
          router.push('/');
        } else {
          setMessage('No se puede iniciar sesión con estas credenciales');
        }
      } else {
        setMessage('No se puede iniciar sesión con estas credenciales');
      }
    } catch (error) {
      setMessage('No se puede iniciar sesión con estas credenciales');
    }

    setIsLoading(false);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin();
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
        <Button primary onClick={onSubmit}>Iniciar sesión</Button>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
