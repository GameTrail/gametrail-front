import type { FC } from 'react';
import React from 'react';
import { TrailGang, UnkownData, RecentGames } from '@/components/Home';
import type { RandomTip } from '@/models/RandomTip/types';
import type { TrailGang as TrailGangProps } from '@/models/Trail/types';
import { Container } from './styled';

export type Props = {
  trailGangData: TrailGangProps;
  randomTips: RandomTip[];
};

const Home:FC<Props> = ({ trailGangData, randomTips }) => (
  <Container>
    <TrailGang trailGangData={trailGangData} />
    <RecentGames trailGangData={trailGangData} />
    <UnkownData randomTips={randomTips} />
  </Container>
);

export default Home;
