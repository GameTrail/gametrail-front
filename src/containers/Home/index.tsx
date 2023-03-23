import type { FC } from 'react';
import React from 'react';
import { TrailGang, UnkownData, RecentGames } from '@/components/Home';
import type { GameList as GamesProps } from '@/models/GameList/types';
import type { Trail as TrailGangProps } from '@/models/Trail/types';
import { Container } from './styled';

export type Props = {
  trailGang: TrailGangProps;
  recentGames: GamesProps;
};

const Home:FC<Props> = ({ trailGang, recentGames }) => (
  <Container>
    <TrailGang trailGang={trailGang} />
    <RecentGames recentGames={recentGames} />
    <UnkownData />
  </Container>
);

export default Home;
