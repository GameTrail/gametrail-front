import React from 'react';
import GameFlow from './GameFlow';
import GameGang from './GameGang';
import {
  Container, Title, ContainerAux,
} from './styles';

const trailgang = () => (
  <Container>
    <Title>TrailGang de la semana</Title>
    <ContainerAux>
      <GameGang />
      <GameFlow />
    </ContainerAux>
  </Container>
);

export default trailgang;
