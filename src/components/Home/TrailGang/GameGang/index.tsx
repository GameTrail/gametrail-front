import type { FC } from 'react';
import React from 'react';
import Crew from '@/components/Home/TrailGang/GameGang/Crew';
import type { Trail as TrailGangProps } from '@/models/Trail/types';
import {
  AuxContainer,
  DataContainer,
  DataText,
  Container,
  Title,
  CrewContainer,
} from './styles';

export type Props = {
  trailGang: TrailGangProps;
};

const GameGang:FC<Props> = ({ trailGang }) => (
  <Container>
    <Title>TrailGang de la semana</Title>
    <CrewContainer>
      <Crew trailGang={trailGang} />
    </CrewContainer>
    <AuxContainer>
      <DataContainer>
        <DataText>
          {trailGang.games.length}
          {' '}
          Juegos 🎮
        </DataText>
      </DataContainer>
      <DataContainer>
        <DataText>
          📆
          {' '}
          {trailGang.startDate}
        </DataText>
      </DataContainer>
    </AuxContainer>
  </Container>
);

export default GameGang;
