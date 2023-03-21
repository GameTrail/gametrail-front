import type { FC } from 'react';
import React from 'react';
import type { TrailGang as TrailGangProps } from '@/models/Trail/types';
import Carrousel from './Carrousel';
import GameGang from './GameGang';
import {
  Container, Title, ContainerAux,
} from './styles';

export type Props = {
  trailGangData: TrailGangProps;
};

const TrailGang:FC<Props> = ({ trailGangData }) => (
  <Container>
    <Title>La TrailGang de la semana es ... 🥁🍾</Title>
    <ContainerAux>
      <Carrousel trailGangData={trailGangData} />
      <GameGang trailGangData={trailGangData} />
    </ContainerAux>
  </Container>
);

export default TrailGang;
