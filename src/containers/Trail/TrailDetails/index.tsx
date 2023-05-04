import type { FC } from 'react';
import React from 'react';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import LoadingSpinner from '@/components/LoadingSpinner';
import PlusInfoRow from '@/components/Trail/TrailDetails/InfoRow';
import Sections from '@/components/Trail/TrailDetails/Sections';
import type { Trail as TrailData } from '@/models/Trail/types';

import { getUserCookie } from '@/utils/login';
import {
  Container,
  TrailTitle,
  TrailDescription,
  AdjustedContainer,
  TrailEdit,
} from './styles';

export type Props = {
  trailData: TrailData | null;
};

const TrailDetails: FC<Props> = ({ trailData }) => {
  const user = getUserCookie();
  const router = useRouter();
  const handleEditTrail = () => {
    router.push(`/trail/edit/${trailData?.id}`);
  };

  if (!trailData) return <LoadingSpinner />;
  return (
    <Container darkMode={false}>
      <AdjustedContainer>

        <motion.div animate={{ x: 0, opacity: 1 }} initial={{ x: 100, opacity: 0 }} transition={{ type: 'easeOut', bounce: 0, duration: 0.8 }}>
          <TrailTitle>
            {trailData.name}
            <TrailEdit>
              {(user?.id === trailData.owner.id)
               && <FontAwesomeIcon icon={faGear} data-testid="gear-icon" onClick={() => handleEditTrail()} className="gear" size="xs" />}
            </TrailEdit>
          </TrailTitle>
        </motion.div>
        <motion.div
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0, fontSize: '1.5rem' }}
          transition={{ type: 'easeOut', bounce: 0, duration: 1 }}
        >
          <TrailDescription>{trailData.description}</TrailDescription>
        </motion.div>

        <motion.div animate={{ x: 0, opacity: 1 }} initial={{ x: 100, opacity: 0 }} transition={{ type: 'easeOut', bounce: 0, duration: 1.2 }}>
          <PlusInfoRow trailData={trailData} />
        </motion.div>

        <motion.div animate={{ x: 0, opacity: 1 }} initial={{ x: 100, opacity: 0 }} transition={{ type: 'easeOut', bounce: 0, duration: 1.4 }}>
          <Sections trailData={trailData} />
        </motion.div>

      </AdjustedContainer>
    </Container>
  );
};

export default TrailDetails;
