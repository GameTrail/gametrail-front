import type { FC } from 'react';
import React from 'react';
import PlusInfoRow from '@/components/TrailDetails/InfoRow/indext';
import Sections from '@/components/TrailDetails/Sections';
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
      <TrailTitle>{trailData.name}</TrailTitle>

      <TrailDescription>{trailData.description}</TrailDescription>

      <PlusInfoRow trailData={trailData} />
      <Sections usersData={usersData} />
    </AdjustedContainer>

  </Container>
);

export default TrailDetails;
