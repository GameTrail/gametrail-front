import type { FC } from 'react';
import type { GetServerSideProps } from 'next';
import { Home as HomeComponent } from '@/containers';
import type { Game } from '@/models/Game/types';
import type { RandomTip } from '@/models/RandomTip/types';
import type { Trail } from '@/models/Trail/types';

export type Props = {
  dataTrail: Trail;
  dataGames: Game[];
  dataTips: RandomTip[];
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const response1 = await fetch('https://gametrail-backend-production-8fc0.up.railway.app/api/getTrail/23');
  const response2 = await fetch('https://gametrail-backend-production-8fc0.up.railway.app/api/recentGames/');
  const response3 = await fetch('https://gametrail-backend-production-8fc0.up.railway.app/api/sabiasque/');
  const dataTrail = await response1.json();
  const dataGames = await response2.json();
  const dataTips = await response3.json();

  return {
    props: {
      dataTrail,
      dataGames,
      dataTips,
    },
  };
};

const Home: FC<Props> = ({ dataTrail, dataGames, dataTips }) => <HomeComponent trailGang={dataTrail} recentGames={dataGames} unknownData={dataTips} />;

export default Home;
