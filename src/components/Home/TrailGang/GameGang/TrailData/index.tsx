import React from 'react';
import type { FC } from 'react';
import { ControllerLottie, TimeLottie } from '@/components/Lotties';
import useLanguage from '@/i18n/hooks';
import type { Trail as TrailGangProps } from '@/models/Trail/types';
import {
  Container, Data,
} from './styles';

export type Props = {
  trailGang: TrailGangProps;
};

const TrailData:FC<Props> = ({ trailGang }) => {
  const { t } = useLanguage();
  const startDate = new Date(trailGang?.startDate);
  const finishDate = new Date(trailGang?.finishDate);

  // Calcular la diferencia en milisegundos
  const durationInMs = finishDate.getTime() - startDate.getTime();

  // Convertir la duración en días
  const durationInDays = durationInMs / (1000 * 60 * 60 * 24);

  return (
    <>
      <Container href={`/trail/${trailGang?.id}`}>
        <ControllerLottie />
        <Data>
          {trailGang.games.length}
          {' '}
          {t('games')}
        </Data>
      </Container>
      <Container href={`/trail/${trailGang?.id}`}>
        <TimeLottie />
        <Data>
          {durationInDays.toFixed()}
          {' '}
          {t('days')}
        </Data>
      </Container>
    </>
  );
};

export default TrailData;
