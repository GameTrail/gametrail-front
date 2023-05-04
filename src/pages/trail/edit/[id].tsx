import React from 'react';
import { useRouter } from 'next/router';
import TrailEdition from '@/containers/Trail/TrailEdition';

const EditTrail = () => {
  const router = useRouter();
  const { id } = router.query;
  const trailId = Number(id);

  return <TrailEdition trailId={trailId} />;
};

export default EditTrail;
