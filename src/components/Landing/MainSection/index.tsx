import React from 'react';
import { useRouter } from 'next/router';
import { GamerLottie } from '@/components/Lotties';
import BrandSection from '../BrandSection';
import {
  Container, Left, Title, Subtitle, AuthButtons, Button, Right, Bottom,
} from './styles';

const MainSection = () => {
  const router = useRouter();
  const navigate = (path: string) => {
    router.push(path);
  };
  return (
    <Container>
      <Left>
        <Title>GameTrail</Title>
        <Subtitle>
          Descubre una nueva manera de jugar en comunidad y guardar el progreso de tus juegos.
        </Subtitle>
        <AuthButtons>
          <Button primary onClick={() => navigate('/auth/login')}>
            Iniciar sesión
          </Button>
          <Button animated onClick={() => navigate('/auth/register')}>
            Registrarse
          </Button>
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
