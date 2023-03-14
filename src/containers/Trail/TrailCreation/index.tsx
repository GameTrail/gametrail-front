import type { FC } from 'react';
import TrailCreationForm from '@/components/Trail/TrailCreation/Form';
import {
  Container,
} from '@/containers/Trail/TrailCreation/styles';
import type { User } from '@/models/User/types';

export type Props = {
  userData: User;
};

const TrailCreation: FC<Props> = () => (
  <Container>
    <TrailCreationForm />
  </Container>

);

export default TrailCreation;
