import type { FC } from 'react';
import React from 'react';
import Link from 'next/link';
import { GamerLottie } from '@/components/Lotties';
import BrandSection from '../BrandSection';
import {
  Container, Left, Title, Subtitle, AuthButtons, Button, Right, Bottom,
} from './styles';

type Props = {
  subscriptionSuccess: boolean;
};
const MainSection: FC<Props> = ({ subscriptionSuccess }) => (
  <Container>
    {subscriptionSuccess && (
      <div className="alert alert-success" role="alert">
        <h4 className="alert-heading">¡Bienvenido a GameTrail Premium!</h4>
      </div>
    )}
    <Left>
      <Title>GameTrail</Title>
      <Subtitle>
        Descubre una nueva manera de jugar en comunidad y guardar el progreso de tus juegos.
      </Subtitle>
      <AuthButtons>
        <Link href="/auth/login">
          <Button primary>Iniciar sesión</Button>
        </Link>
        <Link href="/auth/register">
          <Button animated>Registrarse</Button>
        </Link>
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

export default MainSection;
