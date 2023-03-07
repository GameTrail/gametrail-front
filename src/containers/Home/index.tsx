import type { FC } from 'react';
import React from 'react';
import { TrailGang, UnkownData, RecentGames } from '@/components/Home';
import type { TrailGang as TrailGangProps } from '@/models/Trail/types';

export type Props = {
  trailGang: TrailGangProps;
};

const Home:FC<Props> = ({ trailGang }) => (
  <>
    <TrailGang trailGang={trailGang} />
    <RecentGames />
    <UnkownData />
  </>
);

export default Home;
