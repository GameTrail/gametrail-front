import type { FC } from 'react';
import React, { memo } from 'react';
import { useRouter } from 'next/router';
import type { Trail } from '@/models/Trail/types';
import {
  CardContent, CardImage, CardWrapper, Description, Name, Players, TrailDate,
} from './styles';

type Props = {
  trail: Trail;
};

const TrailCard: FC<Props> = ({ trail }) => {
  const router = useRouter();
  const handleClickTrail = () => {
    router.push(`/trail/${trail.id}`);
  };

  return (
    <CardWrapper onClick={handleClickTrail}>
      <CardImage src={trail.games[0]?.image} />
      <CardContent>
        <Name>{trail.name}</Name>
        <TrailDate>{trail.startDate}</TrailDate>
        <Description>{trail.description}</Description>
        <Players>
          Jugadores
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
