import type { FC } from 'react';
import React from 'react';
import PlusInfoRow from '@/components/TrailDetails/InfoRow/indext';
import Sections from '@/components/TrailDetails/Sections';
import type { Trail as TrailData } from '@/models/Trail/types';
import {
  Container, TrailTitle, TrailDescription,
} from './styles';

export type Props = {
  trailData: TrailData;
};

const TrailDetails: FC<Props> = ({ trailData }) => (
  <Container darkMode>

    <TrailTitle>{trailData.name}</TrailTitle>

    <TrailDescription>{trailData.description}</TrailDescription>

    <PlusInfoRow trailData={trailData} />
    <Sections trailData={trailData} />

  </Container>
);

export default TrailDetails;
