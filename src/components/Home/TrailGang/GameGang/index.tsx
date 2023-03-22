import type { FC } from 'react';
import React from 'react';
import Crew from '@/components/Home/TrailGang/GameGang/Crew';
import type { Trail as TrailGangProps } from '@/models/Trail/types';
import {
  AuxContainer,
  Container,
  Title,
  CrewContainer,
  GameGangContainer,
} from './styles';
import TrailData from './TrailData';

export type Props = {
  trailGang: TrailGangProps;
};

const GameGang:FC<Props> = ({ trailGang }) => (
  <Container>
    <Title>TrailGang de la semana</Title>
    <GameGangContainer>
      <CrewContainer>
        <Crew trailGang={trailGang} />
      </CrewContainer>
      <AuxContainer>
        <TrailData trailGang={trailGang} />
      </AuxContainer>
    </GameGangContainer>
  </Container>
);

export default GameGang;
