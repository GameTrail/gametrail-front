import type { FC } from 'react';
import { motion } from 'framer-motion';
import type { Trail as TrailData } from '@/models/Trail/types';

export type Props = {
  trailData: TrailData;
};
const PlayersList: FC<Props> = ({ trailData }) => (
  <motion.div animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ type: 'spring' }}>
    <h1>
      PlayersList from trail
      {trailData.name}
    </h1>
  </motion.div>
);

export default PlayersList;
