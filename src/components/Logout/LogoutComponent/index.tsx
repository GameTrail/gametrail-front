import React from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { Button } from '@/components/Landing/MainSection/styles';
import { LogoutLottie } from '@/components/Lotties';
import useLanguage from '@/i18n/hooks';
import { getUserCookie } from '@/utils/login';
import {
  Container,
  LogoutContainer, Title,
} from './styles';

const LOGOUT_URL = 'https://gametrail-backend-s4-production.up.railway.app/api/auth/logout';

const Logout = () => {
  const { t } = useLanguage();
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
        <Title>{t('you_sure_about_leaving')}</Title>
        <Button onClick={onPressLogout}>
          {t('exit')}
        </Button>
      </Container>
    </LogoutContainer>
  );
};

export default Logout;
