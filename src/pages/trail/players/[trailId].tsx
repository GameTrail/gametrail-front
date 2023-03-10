import type { FC } from 'react';
import React from 'react';

import type { GetServerSideProps, GetServerSidePropsContext } from 'next';
import TrailDetails from '@/containers/TrailDetails';
import type { Trail as TrailData } from '@/models/Trail/types';

export type Props = {
  data: TrailData;
};

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const trail = context.params?.trailId as string;
  const response = await fetch(`http://127.0.0.1:3000/api/trail/${trail}`);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};

const Trail: FC<Props> = ({ data }) => <TrailDetails trailData={data} />;
export default Trail;
