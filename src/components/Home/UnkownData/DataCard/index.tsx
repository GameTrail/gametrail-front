import type { FC } from 'react';
import React from 'react';
import type { RandomTip } from '@/models/RandomTip/types';
import {
  DataText, DataContainer,
} from './styles';

export type Props = {
  randomTip: RandomTip;
};

const DataCard: FC<Props> = ({ randomTip }) => (
  <DataContainer>
    <DataText>
      {randomTip.curiosity}
    </DataText>
  </DataContainer>
);

export default DataCard;
