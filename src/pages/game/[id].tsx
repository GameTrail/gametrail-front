import type { FC } from 'react';
import React from 'react';
import type { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { GameDetails } from '@/containers';
import type { Game as GameProps } from '@/models/Game/types';
import type { Trail } from '@/models/Trail/types';

export type Props = {
  data: GameProps;
  trailData: Trail[];
};

export const getServerSideProps: GetServerSideProps<Props> = async (context: GetServerSidePropsContext) => {
  const id = context.params?.id as string;
  const response = await fetch(`https://gametrail-backend-production-8fc0.up.railway.app/api/game/${id}/`);
  const data = await response.json();

  const trailResponse = await fetch(`https://gametrail-backend-production-8fc0.up.railway.app/api/getTrail/?games__game=${id}`);
  const trailData = await trailResponse.json();

  return {
    props: {
      data,
      trailData,
    },
  };
};

const Game: FC<Props> = ({ data, trailData }) => <GameDetails gameDetails={data} trailData={trailData} />;

export default Game;
