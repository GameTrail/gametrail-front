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
  const { handleSetUser, handleSetToken } = useGameTrail();
  const router = useRouter();

  const onPressLogout = () => {
    handleSetUser(null);
    handleSetToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('user_id');

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
