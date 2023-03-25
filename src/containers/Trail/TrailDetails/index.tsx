import type { FC } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import PlusInfoRow from '@/components/Trail/TrailDetails/InfoRow/indext';
import Sections from '@/components/Trail/TrailDetails/Sections';
import type { Trail as TrailData } from '@/models/Trail/types';
import type { User as UserDetails } from '@/models/User/types';
import {
  Container, TrailTitle, TrailDescription, AdjustedContainer,
} from './styles';

export type Props = {
  trailData: TrailData;
  usersData: UserDetails [];
};

const TrailDetails: FC<Props> = ({ trailData, usersData }) => (
  <Container darkMode={false}>
    <AdjustedContainer>

      <motion.div animate={{ x: 0, opacity: 1 }} initial={{ x: 100, opacity: 0 }} transition={{ type: 'easeOut', bounce: 0, duration: 0.8 }}>
        <TrailTitle>{trailData.name}</TrailTitle>
      </motion.div>

      <motion.div animate={{ x: 0, opacity: 1 }} initial={{ x: 100, opacity: 0 }} transition={{ type: 'easeOut', bounce: 0, duration: 1 }}>
        <TrailDescription>{trailData.description}</TrailDescription>
      </motion.div>

      <motion.div animate={{ x: 0, opacity: 1 }} initial={{ x: 100, opacity: 0 }} transition={{ type: 'easeOut', bounce: 0, duration: 1.2 }}>
        <PlusInfoRow trailData={trailData} usersData={usersData} />
      </motion.div>

      <motion.div animate={{ x: 0, opacity: 1 }} initial={{ x: 100, opacity: 0 }} transition={{ type: 'easeOut', bounce: 0, duration: 1.4 }}>
        <Sections trailData={trailData} usersData={usersData} />
      </motion.div>

    </AdjustedContainer>
  </Container>
);

export default TrailDetails;
