import { useEffect, useState } from 'react';
import Error from '@/components/Error';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Home as HomeComponent } from '@/containers';
import type { Game } from '@/models/Game/types';
import type { RandomTip } from '@/models/RandomTip/types';
import type { Trail } from '@/models/Trail/types';

const Home = () => {
  const [dataTrail, setDataTrail] = useState<Trail | null>(null);
  const [dataGames, setDataGames] = useState<Game[] | null>(null);
  const [dataTips, setDataTips] = useState<RandomTip[] | null>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(false);

      const urls = ['https://gametrail-backend-production-8fc0.up.railway.app/api/getTrail/23', 'https://gametrail-backend-production-8fc0.up.railway.app/api/recentGames/', 'https://gametrail-backend-production-8fc0.up.railway.app/api/sabiasque/'];

      try {
        const responses = await Promise.all(
          urls.map((url) => fetch(url)),
        );

        const jsons = await Promise.all(
          responses.map((response) => response.json()),
        );

        setDataTrail(jsons[0]);
        setDataGames(jsons[1]);
        setDataTips(jsons[2]);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <Error />;

  return <HomeComponent trailGang={dataTrail} recentGames={dataGames} unknownData={dataTips} />;
};

export default Home;
