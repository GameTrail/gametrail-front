import type { FC } from 'react';
import React from 'react';
import { TrailGang, UnkownData, RecentGames } from '@/components/Home';
import type { TrailGang as TrailGangProps } from '@/models/Trail/types';
import { Container } from './styled';

export type Props = {
  trailGang: TrailGangProps;
};

const Home:FC<Props> = ({ trailGang }) => (
  <Container>
    <TrailGang trailGang={trailGang} />
    <RecentGames trailGang={trailGang} />
    <UnkownData />
  </Container>
);

export default Home;
