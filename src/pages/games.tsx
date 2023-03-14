import type { FC } from 'react';
import React from 'react';
import type { GetServerSideProps } from 'next';
import { GameList } from '@/containers';
import type { Game } from '@/models/Game/types';

export type Props = {
  data: Game[];
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const response = await fetch('https://gametrail-backend-production.up.railway.app/api/game');
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};

const Games: FC<Props> = ({ data }) => <GameList games={data} />;

export default Games;
