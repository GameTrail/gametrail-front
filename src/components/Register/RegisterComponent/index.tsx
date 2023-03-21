import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@/components/Landing/MainSection/styles';
import { LoginLottie } from '@/components/Lotties';
import { useGameTrail } from '@/hooks';
import {
  RegisterContainer, Container, Title, RegisterForm, Label, Input, ErrorContainer,
} from './styles';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [avatar, setAvatar] = useState('');

  const { handleSetToken } = useGameTrail();
  const router = useRouter();
  const [message, setMessage] = useState<string>('');

  const handleRegister = async (e: any) => {
    e.preventDefault();

    const defaultAvatar = './public/images/Prf.jpg';
    const avatarURL = avatar || defaultAvatar;

    const credentials = {
      username, email, password, avatarURL,
    };

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ credentials }),
    };

    const API_URL = 'https://gametrail-backend-production.up.railway.app/api/auth/register/';

    const authenticate = async () => {
      try {
        const response = await fetch(API_URL, options);
        // check if response is ok
        if (response.ok) {
          const data = await response.json();
          handleSetToken(data.token);
          router.push('/');
          setMessage('Usuario creado correctamente');
        } else if (password !== password2) {
          setMessage('Las contraseñas no coinciden, revisa de nuevo');
        } else {
          const data = await response.json();
          setMessage(data.non_field_errors[0]);
        }
      } catch (error) {
        setMessage('Ha ocurrido un error durante el registro');
      }
    };
    authenticate();
  };

  return (
    <RegisterContainer>
      <LoginLottie />
      <RegisterForm>
        <Title>
          Registrate en GameTrail
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
            Correo electrónico
            <Input
              type="email"
              name="Correo electrónico"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
        <Container>
          <Label>
            Repetir contraseña
            <Input
              type="password"
              name="Repetir Contraseña"
              placeholder="Repetir Contraseña"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
          </Label>
        </Container>
        <Container>
          <Label>
            Avatar
            <Input
              type="text"
              name="Avatar"
              placeholder="URL del avatar"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
          </Label>
        </Container>
        <Button primary onClick={handleRegister}>Registro</Button>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default Register;
