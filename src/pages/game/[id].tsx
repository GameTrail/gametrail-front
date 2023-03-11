import type { FC } from 'react';
import React from 'react';

import type { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { GameDetails } from '@/containers';
import type { Game as GameProps } from '@/models/Game/types';

export type Props = {
  data: GameProps;
};

export const getServerSideProps: GetServerSideProps<Props> = async (context: GetServerSidePropsContext) => {
  const id = context.params?.id as string;
  const response = await fetch(`http://127.0.0.1:3000/api/game/${id}`);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};

const Game: FC<Props> = ({ data }) => <GameDetails gameDetails={data} />;

export default Game;
