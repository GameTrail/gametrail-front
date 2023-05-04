import type { FC } from 'react';
import TrailEditionForm from '@/components/Trail/TrailEdition/Form';
import {
  Container,
} from '@/containers/Trail/TrailCreation/styles';

export type Props = {
  trailId: number;
};

const TrailEdition: FC<Props> = ({ trailId }) => (
  <Container>
    <TrailEditionForm trailId={trailId} />
  </Container>
);

export default TrailEdition;
