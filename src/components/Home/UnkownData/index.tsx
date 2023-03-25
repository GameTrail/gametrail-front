import type { FC } from 'react';
import { CuriosityLottie } from '@/components/Lotties';
import type { RandomTip } from '@/models/RandomTip/types';
import DataCard from './DataCard';
import {
  Container, Title, CuriosityContainer,
} from './styles';

export type Props = {
  unknownData: RandomTip[];
};

const Unkowndata:FC<Props> = ({ unknownData }) => {
  const sizeTips = unknownData.length;
  const randomIndex = Math.floor(Math.random() * (sizeTips + 1));
  const randomTip = unknownData[randomIndex];
  return (
    <CuriosityContainer>
      <Container>
        <Title>¿Sabías que ... ?</Title>
        <DataCard unknownData={randomTip} />
      </Container>
      <CuriosityLottie />
    </CuriosityContainer>
  );
};

export default Unkowndata;
