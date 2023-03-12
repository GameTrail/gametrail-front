import type { FC } from 'react';
import useSWR from 'swr';
import { Home as HomeComponent } from '@/containers';
import type { TrailGang } from '@/models/Trail/types';

export type Props = {
  data: TrailGang;
};

const fetcher = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const Home: FC<Props> = () => {
  const { data, error } = useSWR('https://gametrail.vercel.app/api/trailgang/', fetcher);

  if (error) return <div>Failed to load data</div>;
  if (!data) return <div>Loading...</div>;

  return <HomeComponent trailGang={data} />;
};

export default Home;
