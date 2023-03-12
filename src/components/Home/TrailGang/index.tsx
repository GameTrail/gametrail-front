import type { FC } from 'react';
import React from 'react';
import type { TrailGang as TrailGangProps } from '@/models/Trail/types';
import Carrousel from './Carrousel';
import GameGang from './GameGang';
import {
  Container, Title, ContainerAux,
} from './styles';

export type Props = {
  trailGang: TrailGangProps;
};

const TrailGang:FC<Props> = ({ trailGang }) => (
  <Container>
    <Title>La TrailGang de la semana es ... 🥁🍾</Title>
    <ContainerAux>
      <Carrousel trailGang={trailGang} />
      <GameGang trailGang={trailGang} />
    </ContainerAux>
  </Container>
);

export default TrailGang;
