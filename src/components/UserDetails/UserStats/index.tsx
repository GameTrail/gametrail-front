import React from 'react';
import type { FC } from 'react';
import { DefaultRadar } from '@/components/Charts/Radar';
import useLanguage from '@/i18n/hooks';
import type { Rating } from '@/models/Rating/types';
import { Container } from './styles';

export type Props = {
  userRating: Rating;
};

const UserStats:FC<Props> = ({ userRating }) => {
  const { t } = useLanguage();

  const handleRenderStats = () => {
    if (!userRating) return <h1>{t('no_stats_available')}</h1>;

    const radarData = {
      labels: [
        `${t('premium_filters_kindness')} (${userRating.kindness.toFixed(1)})`,
        `${t('premium_filters_fun')} (${userRating.funny.toFixed(1)})`,
        `${t('premium_filters_cooperation')} (${userRating.teamwork.toFixed(1)})`,
        `${t('premium_filters_ability')} (${userRating.ability.toFixed(1)})`,
        `${t('premium_filters_availability')} (${userRating.availability.toFixed(1)})`,
      ],
      datasets: [
        {
          data: [userRating.kindness, userRating.funny, userRating.teamwork, userRating.ability, userRating.availability],
          fill: true,
          backgroundColor: 'rgba(143, 188, 187, 0.5)',
          borderColor: '#88c0d0',
          pointBackgroundColor: '#b48ead',
          pointBorderColor: '#eceff4',
          pointHoverBackgroundColor: '#eceff4',
          pointHoverBorderColor: '#b48ead',
          pointHoverRadius: 15,
          pointRadius: 5,

        },
      ],
    };
    return (
      <DefaultRadar data={radarData} />
    );
  };

  return (
    <Container>
      {handleRenderStats()}
    </Container>
  );
};

export default UserStats;
