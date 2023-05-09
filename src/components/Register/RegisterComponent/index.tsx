import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/Landing/MainSection/styles';
import { LoginLottie } from '@/components/Lotties';
import {
  RegisterContainer, Container, Title, RegisterForm, Label, Input, ErrorContainer, LabelCheck, InputCheck,
} from './styles';

const REGISTER_URL = 'gametrail-backend-s4-production.up.railway.app/api/auth/register/';

export enum RegisterError {
  MATCH = 'non_field_errors',
  USERNAME = 'username',
  EMAIL = 'email',
}

export type RegisterErrors = {
  [key in RegisterError]: string;
};

const Register = () => {
  const { t } = useTranslation();
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

  const placeholderUsername = t('register_username');
  const placeholderEmail = t('register_email');
  const placeholderPassword = t('password');
  const placeholderPasswordConfirmation = t('register_password_confirmation');
  return (
    <RegisterContainer>
      <LoginLottie />
      <RegisterForm onSubmit={handleRegister}>
        <Title>
          {t('register_title')}
        </Title>
        {registerErrors.map((message) => (
          <ErrorContainer key={registerErrors.indexOf(message)}>{message}</ErrorContainer>
        ))}
        <Container>
          <Label>
            {t('register_username')}
            <Input
              type="text"
              name="Nombre de usuario"
              placeholder={placeholderUsername}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Label>
        </Container>
        <Container>
          <Label>
            {t('register_email')}
            <Input
              type="email"
              name="Correo electrónico"
              placeholder={placeholderEmail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Label>
        </Container>
        <Container>
          <Label>
            {t('password')}
            <Input
              type="password"
              name="Contraseña"
              placeholder={placeholderPassword}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Label>
        </Container>
        <Container>
          <Label>
            {t('register_password_confirmation')}
            <Input
              type="password"
              name="Repetir Contraseña"
              placeholder={placeholderPasswordConfirmation}
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
              placeholder="URL"
              value={avatarURL}
              onChange={(e) => setAvatar(e.target.value)}
            />
          </Label>
        </Container>
        <LabelCheck>
          {t('register_accept-1')}
          <Link href="/terms">
            {' '}
            {t('register_accept-2')}
            {' '}
          </Link>
          {t('register_accept-3')}
          <Link href="/privacy">
            {' '}
            {t('register_accept-4')}
            {' '}
          </Link>
          {t('register_accept-5')}
          <Link href="/cookiespolicy">
            {' '}
            {t('register_accept-6')}
            {' '}
          </Link>
          {t('register_accept-7')}
          <InputCheck
            type="checkbox"
            required
          />
        </LabelCheck>
        <Button primary type="submit">{t('register')}</Button>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default Register;
