import useSWR from 'swr';
import Error from '@/components/Error';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Home as HomeComponent } from '@/containers';
import { fetcher } from '@/utils/fetcher';

const Home = () => {
  const { data: trailGangData, error: trailGangError } = useSWR('http://localhost:3000/api/trailgang', fetcher);
  const { data: randomTips, error: randomTipsError } = useSWR('https://gametrail-backend-production.up.railway.app/api/sabiasque/', fetcher);

  if (trailGangError || randomTipsError) return <Error />;
  if (!trailGangData || !randomTips) return <LoadingSpinner />;

  return <HomeComponent trailGangData={trailGangData} randomTips={randomTips} />;
};

export default Home;
