import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@/components/Landing/MainSection/styles';
import { LoginLottie } from '@/components/Lotties';
import { useGameTrail } from '@/hooks';
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

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<string>('');
  const { handleSetUser, handleSetToken } = useGameTrail();
  const router = useRouter();

  const handleLogin = async () => {
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
        sessionStorage.setItem('token', data.token);

        const userResponse = await fetch(`https://gametrail-backend-production.up.railway.app/api/user/${data.user_id}`, {
          headers: { Authorization: `Bearer ${data.token}` },
        });

        if (userResponse.ok) {
          const user = await userResponse.json();
          handleSetUser(user);
          localStorage.setItem('user', JSON.stringify(user));
          sessionStorage.setItem('user', JSON.stringify(user));
          router.push('/home');
        } else {
          throw new Error('Error al obtener los datos del usuario');
        }
      } else if (response.status === 401) {
        setMessage('Las credenciales son inválidas');
      } else {
        throw new Error('Error al iniciar sesión');
      }
    } catch (error) {
      setMessage('Error en el inicio de sesión');
    }
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
