import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from '@/components/Landing/MainSection/styles';
import { LoginLottie } from '@/components/Lotties';
import {
  RegisterContainer, Container, Title, RegisterForm, Label, Input, ErrorContainer, LabelCheck, InputCheck,
} from './styles';

const REGISTER_URL = 'https://gametrail-backend-production-8fc0.up.railway.app/api/auth/register/';

export enum RegisterError {
  MATCH = 'non_field_errors',
  USERNAME = 'username',
  EMAIL = 'email',
}

export type RegisterErrors = {
  [key in RegisterError]: string;
};

const Register = () => {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [avatarURL, setAvatar] = useState('');
  const [registerErrors, setRegisterErrors] = useState<string[]>([]);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const defaultAvatar = 'https://cdnb.artstation.com/p/assets/images/images/035/213/423/large/mcashe-titanzekeef-dev.jpg?1614374087';
    const avatar = avatarURL || defaultAvatar;

    const credentials = {
      username, email, password, password_confirmation: passwordConfirmation, avatar,
    };

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    };

    const authenticate = async () => {
      try {
        const response = await fetch(REGISTER_URL, options);
        if (response.ok) {
          setRegisterErrors([]);
          router.push('/auth/login');
        } else if (password !== passwordConfirmation) {
          setRegisterErrors([...registerErrors, 'Las contraseñas no coinciden']);
        } else {
          const errorData = await response.json() as { [key: string]: string[] };
          const errorMessages = Object.entries(errorData)
            .flatMap(([key, errors]) => errors.map((error) => `${key}: ${error}`));
          setRegisterErrors(errorMessages);
        }
      } catch (error) {
        setRegisterErrors(['Ha ocurrido un error durante el registro']);
      }
    };
    authenticate();
  };

  return (
    <RegisterContainer>
      <LoginLottie />
      <RegisterForm onSubmit={handleRegister}>
        <Title>
          Registrate en GameTrail
        </Title>
        {registerErrors.map((message) => (
          <ErrorContainer key={registerErrors.indexOf(message)}>{message}</ErrorContainer>
        ))}
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
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
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
              value={avatarURL}
              onChange={(e) => setAvatar(e.target.value)}
            />
          </Label>
        </Container>
        <LabelCheck>
          Al clickar aquí, aceptas los
          <Link href="/terms"> términos y condiciones de uso </Link>
          , además de la
          <Link href="/privacy"> política de privacidad </Link>
          y
          <Link href="/cookiespolicy"> política de cookies </Link>
          de GameTrail
          <InputCheck
            type="checkbox"
            required
          />
        </LabelCheck>
        <Button primary type="submit">Registro</Button>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default Register;
