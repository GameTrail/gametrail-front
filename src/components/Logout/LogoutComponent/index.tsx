import React from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { Button } from '@/components/Landing/MainSection/styles';
import { LogoutLottie } from '@/components/Lotties';
import { getUserCookie } from '@/utils/login';
import {
  Container,
  LogoutContainer, Title,
} from './styles';

const LOGOUT_URL = 'https://gametrail-backend-production.up.railway.app/api/auth/logout';

const Logout = () => {
  const router = useRouter();
  const userCookie = getUserCookie();
  const token = userCookie?.auth_token;

  const onPressLogout = async () => {
    if (!userCookie) return;
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        },
      };
      const res = await fetch(LOGOUT_URL, options);
      if (!res.ok) return;
      Cookies.remove('user');
    } catch (error) {
      throw new Error('Error al hacer logout');
    } finally {
      router.push('/');
    }
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
