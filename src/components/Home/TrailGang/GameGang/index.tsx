import type { FC } from 'react';
import React from 'react';
import Crew from '@/components/Home/TrailGang/GameGang/Crew';
import useLanguage from '@/i18n/hooks';
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

const GameGang:FC<Props> = ({ trailGang }) => {
  const { t } = useLanguage();
  return (
    <Container>
      <Title>{t('trailgang_of_the_week')}</Title>
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
};

export default GameGang;
