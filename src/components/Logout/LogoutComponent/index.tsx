import React from 'react';
import { useRouter } from 'next/router';
import { Button } from '@/components/Landing/MainSection/styles';
import { LogoutLottie } from '@/components/Lotties';
import { useGameTrail } from '@/hooks';
import {
  Container,
  LogoutContainer, Title,
} from './styles';

const Logout = () => {
  const { token, handleSetUser, handleSetToken } = useGameTrail();
  const router = useRouter();

  const onPressLogout = () => {
    handleSetUser(null);
    handleSetToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');

    const API_URL = 'https://gametrail-backend-production.up.railway.app/api/auth/logout';
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(token),
    };
    const logout = async () => {
      try {
        const response = await fetch(API_URL, options);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
        }
      } catch (error) {
        console.log({ error });
      }
    };
    logout();
    router.push('/');
  };

  return (
    <LogoutContainer>
      <LogoutLottie />
      <Container>
        <Title>¿Seguro que quieres irte?</Title>
        <Button onClick={onPressLogout}>
          Salir
        </Button>
      </Container>
    </LogoutContainer>
  );
};

export default Logout;
