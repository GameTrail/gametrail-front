import type { FC } from 'react';
import type { GetServerSideProps } from 'next';
import { Home as HomeComponent } from '@/containers';
import type { Game } from '@/models/Game/types';
import type { Trail } from '@/models/Trail/types';

export type Props = {
  dataTrail: Trail;
  dataGames: Game;
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const response1 = await fetch('http://127.0.0.1:3000/api/trailgang');
  const response2 = await fetch('http://127.0.0.1:3000/api/games/1');
  const dataTrail = await response1.json();
  const dataGames = await response2.json();

  return {
    props: {
      dataTrail,
      dataGames,
    },
  };
};

const Home: FC<Props> = ({ dataTrail, dataGames }) => <HomeComponent trailGang={dataTrail} recentGames={dataGames} />;

export default Home;
