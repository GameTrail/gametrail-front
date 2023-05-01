import React from 'react';
import type { FC } from 'react';
import { useRouter } from 'next/router';
import NotFoundList from '@/components/Lotties/User/NotFoundList';
import useLanguage from '@/i18n/hooks';
import type { Trail } from '@/models/Trail/types';
import {
  Item, Container, TrailListEmpty, TrailName, NumPlayers,
} from './styles';

export type Props = {
  trailList : Trail[]
};

const GameTrailList:FC<Props> = ({ trailList }) => {
  const { t } = useLanguage();
  const router = useRouter();
  const handleRenderStatus = (trail: Trail) => {
    const status = Date.parse(trail.finishDate) > new Date().getTime();
    return status
      ? <span style={{ backgroundColor: '#5e81ac' }}>{t('trail_in_progress')}</span>
      : <span style={{ backgroundColor: '#a3be8c' }}>{t('trail_finished')}</span>;
  };

  const handleClickTrailDetails: any = (id: number) => {
    router.push('/trail/[id]', `/trail/${id}`);
  };

  const handleRenderList = () => {
    if (trailList?.length !== 0) {
      return (
        trailList?.map((trail) => (
          <Item key={trail.id} onClick={() => handleClickTrailDetails(trail.id)}>
            <img
              alt={trail.owner.username}
              src={trail.owner.avatar}
              height={30}
              width={30}
            />
            <TrailName>{trail.name}</TrailName>
            <NumPlayers>
              2/
              {trail.maxPlayers}
            </NumPlayers>
            <p>
              {handleRenderStatus(trail)}
            </p>
          </Item>
        ))

      );
    }
    return (
      <TrailListEmpty>
        <p>Aún no hay trails creados</p>
        <NotFoundList />
      </TrailListEmpty>
    );
  };

  return (
    <Container>
      {handleRenderList()}
    </Container>

  );
};

export default GameTrailList;
