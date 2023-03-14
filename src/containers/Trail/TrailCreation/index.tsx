import type { FC } from 'react';
import { motion } from 'framer-motion';
import TrailCreationForm from '@/components/Trail/TrailCreation/Form';
import {
  Container,
} from '@/containers/Trail/TrailCreation/styles';
import type { User } from '@/models/User/types';

export type Props = {
  userData: User;
};

const TrailCreation: FC<Props> = () => (
  <motion.div
    animate={{
      opacity: 1, y: 0, width: '100%', x: '5%',
    }}
    initial={{ opacity: 0, y: 100, x: '5%' }}
    transition={{ type: 'spring', duration: 1 }}
    style={{ maxWidth: '100%' }}
  >
    <Container>
      <TrailCreationForm />
    </Container>
  </motion.div>

);

export default TrailCreation;
