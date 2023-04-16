import type { FC } from 'react';
import React, { memo } from 'react';
import { useRouter } from 'next/router';
import useLanguage from '@/i18n/hooks';
import type { Trail } from '@/models/Trail/types';
import {
  CardContent, CardImage, CardWrapper, Description, Name, Players, TrailDate,
} from './styles';

type Props = {
  trail: Trail;
};

const TrailCard: FC<Props> = ({ trail }) => {
  const { t } = useLanguage();
  const router = useRouter();
  const handleClickTrail = () => {
    router.push(`/trail/${trail.id}`);
  };

  const sliceText = (text: string) => {
    if (text.length > 15) {
      return `${text.slice(0, 15)}...`;
    }
    return text;
  };
  return (
    <CardWrapper onClick={handleClickTrail}>
      <CardImage src={trail.games[0]?.image} />
      <CardContent>
        <Name>{sliceText(trail.name)}</Name>
        <TrailDate>{trail.startDate}</TrailDate>
        <Description>{sliceText(trail.description)}</Description>
        <Players>
          {t('players')}
          {' '}
          {trail.users?.length}
          /
          {trail.maxPlayers}
        </Players>
      </CardContent>
    </CardWrapper>
  );
};

export default memo(TrailCard);
