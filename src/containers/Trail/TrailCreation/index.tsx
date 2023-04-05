import { useState } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';
import TrailCreationForm from '@/components/Trail/TrailCreation/Form';
import {
  Container,
} from '@/containers/Trail/TrailCreation/styles';

const TrailCreation = () => {
  const [loadingForm, setLoadingForm] = useState(false);
  const handleSetLoadingForm = (value: boolean) => {
    setLoadingForm(value);
  };

  if (loadingForm) return <LoadingSpinner />;

  return (
    <Container>
      <TrailCreationForm handleSetLoadingForm={handleSetLoadingForm} />
    </Container>

  );
};

export default TrailCreation;
