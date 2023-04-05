import type { FC } from 'react';
import React from 'react';
import { TrailGang, UnkownData, RecentGames } from '@/components/Home';
import LoadingSpinner from '@/components/LoadingSpinner';
import type { Game } from '@/models/Game/types';
import type { RandomTip } from '@/models/RandomTip/types';
import type { Trail as TrailGangProps } from '@/models/Trail/types';
import { Container } from './styled';

export type Props = {
  trailGang: TrailGangProps | null;
  recentGames: Game[] | null;
  unknownData: RandomTip[] | null;
};

const Home:FC<Props> = ({ trailGang, recentGames, unknownData }) => {
  if (!trailGang || !recentGames || !unknownData) return <LoadingSpinner />;
  return (
    <Container>
      <TrailGang trailGang={trailGang} />
      <RecentGames recentGames={recentGames} />
      <UnkownData unknownData={unknownData} />
    </Container>
  );
};

export default Home;
