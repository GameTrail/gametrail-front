import { useState } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';
import TrailCreationForm from '@/components/Trail/TrailCreation/Form';
import {
  Container,
} from '@/containers/Trail/TrailCreation/styles';

const TrailCreation = () => {
  const [loading, setLoading] = useState(false);
  const handleSetLoading = (value: boolean) => {
    setLoading(value);
  };
  return (
    <Container>
      {loading ? <LoadingSpinner /> : <TrailCreationForm handleSetLoading={handleSetLoading} />}
    </Container>

  );
};

export default TrailCreation;
