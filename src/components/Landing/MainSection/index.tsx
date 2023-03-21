import React from 'react';
import Link from 'next/link';
import { GamerLottie } from '@/components/Lotties';
import BrandSection from '../BrandSection';
import {
  Container, Left, Title, Subtitle, AuthButtons, Button, Right, Bottom,
} from './styles';

const MainSection = () => (
  <Container>
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
