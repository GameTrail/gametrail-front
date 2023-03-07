import React from 'react';
import Carrousel from './Carrousel';
import GameGang from './GameGang';
import {
  Container, Title, ContainerAux,
} from './styles';

const trailgang = () => (
  <Container>
    <Title>TrailGang de la semana</Title>
    <ContainerAux>
      <Carrousel />
      <GameGang />
    </ContainerAux>
  </Container>
);

export default trailgang;
