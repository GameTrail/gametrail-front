import React from 'react';
import type { FC } from 'react';
import { ControllerLottie, TimeLottie } from '@/components/Lotties';
import type { Trail as TrailGangProps } from '@/models/Trail/types';
import {
  Container, Data,
} from './styles';

export type Props = {
  trailGang: TrailGangProps;
};

const TrailData:FC<Props> = ({ trailGang }) => {
  const startDate = new Date(trailGang?.startDate);
  const finishDate = new Date(trailGang?.finishDate);

  // Calcular la diferencia en milisegundos
  const durationInMs = finishDate.getTime() - startDate.getTime();

  // Convertir la duración en días
  const durationInDays = durationInMs / (1000 * 60 * 60 * 24);

  return (
    <>
      <Container>
        <ControllerLottie />
        <Data>
          {trailGang?.games?.length}
          Juegos
        </Data>
      </Container>
      <Container>
        <TimeLottie />
        <Data>
          {durationInDays.toFixed()}
          Días
        </Data>
      </Container>
    </>
  );
};

export default TrailData;
