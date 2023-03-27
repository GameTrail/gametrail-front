import type { FC } from 'react';
import React from 'react';
import Link from 'next/link';
import { GamerLottie } from '@/components/Lotties';
import { getUserCookie } from '@/utils/login';
import BrandSection from '../BrandSection';
import {
  Container, Left, Title, Subtitle, AuthButtons, Button, Right, Bottom,
} from './styles';

type Props = {
  subscriptionSuccess: boolean;
};
const MainSection: FC<Props> = ({ subscriptionSuccess }) => {
  const userCookie = getUserCookie();
  return (
    <Container>
      <Left>
        <Title>GameTrail</Title>
        <Subtitle>
          Descubre una nueva manera de jugar en comunidad y guardar el progreso de tus juegos.
        </Subtitle>
        <AuthButtons>
          {subscriptionSuccess && <h2 className="alert-heading" style={{ color: 'orange' }}>¡Bienvenido a GameTrail Premium! 🎉</h2>}
          {userCookie === null
            ? (
              <>
                <Link href="/auth/login">
                  <Button primary>Iniciar sesión</Button>
                </Link>
                <Link href="/auth/register">
                  <Button animated>Registrarse</Button>
                </Link>
              </>
            ) : (
              <Link href="/home">
                <Button>Ir a Gametrail</Button>
              </Link>
            )}
        </AuthButtons>
      </Left>
      <Right>
        <GamerLottie />
      </Right>
      <Bottom>
        <BrandSection />
      </Bottom>
    </Container>
  );
};

export default MainSection;
