import type { FC } from 'react';
import type { GetServerSideProps } from 'next';
import { Home as HomeComponent } from '@/containers';
import type { TrailGang } from '@/models/Trail/types';

export type Props = {
  data: TrailGang;
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const response = await fetch('http://127.0.0.1:3000/api/trailgang/');
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};

const Home: FC<Props> = ({ data }) => <HomeComponent trailGang={data} />;

export default Home;
