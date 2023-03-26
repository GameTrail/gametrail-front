import type { FC } from 'react';
import React from 'react';
import type { RandomTip } from '@/models/RandomTip/types';
import {
  DataText, DataContainer,
} from './styles';

export type Props = {
  unknownData: RandomTip;
};

const Datacard:FC<Props> = ({ unknownData }) => (
  <DataContainer>
    <DataText>
      {unknownData.curiosity}
    </DataText>
  </DataContainer>
);

export default Datacard;
