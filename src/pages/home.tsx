import type { FC } from 'react';
import useSWR from 'swr';
import Error from '@/components/Error';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Home as HomeComponent } from '@/containers';
import type { TrailGang } from '@/models/Trail/types';
import { fetcher } from '@/utils/fetcher';

export type Props = {
  data: TrailGang;
};

const Home: FC<Props> = () => {
  const { data, error } = useSWR('https://gametrail.vercel.app/api/trailgang', fetcher);

  if (error) return <Error />;
  if (!data) return <LoadingSpinner />;

  return <HomeComponent trailGang={data} />;
};

export default Home;
