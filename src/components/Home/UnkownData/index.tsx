import type { FC } from 'react';
import React from 'react';
import type { RandomTip } from '@/models/RandomTip/types';
import DataCard from './DataCard';
import {
  Container, Title,
} from './styles';

export type Props = {
  randomTips: RandomTip[];
};

const Unkowndata: FC<Props> = ({ randomTips }) => {
  const sizeTips = randomTips.length;
  const randomIndex = Math.floor(Math.random() * (sizeTips + 1));
  const randomTip = randomTips[randomIndex];

  return (
    <Container>
      <Title>¿Sabías que ... ?</Title>
      <DataCard randomTip={randomTip} />
    </Container>
  );
};

export default Unkowndata;
