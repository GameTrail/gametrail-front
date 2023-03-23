import type { FC } from 'react';
import React from 'react';

import type { GetServerSideProps, GetServerSidePropsContext } from 'next';
import TrailDetails from '@/containers/Trail/TrailDetails';
import type { Trail as TrailData } from '@/models/Trail/types';

export type Props = {
  data: TrailData;
};

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const trail = context.params?.id as string;
  const response = await fetch(`https://gametrail-backend-production.up.railway.app/api/trail/${trail}`);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};

const Trail: FC<Props> = ({ data }) => <TrailDetails trailData={data} />;
export default Trail;
