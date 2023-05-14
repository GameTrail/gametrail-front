import React from 'react';
import type { FC } from 'react';
import { useRouter } from 'next/router';
import NotFoundList from '@/components/Lotties/User/NotFoundList';
import useLanguage from '@/i18n/hooks';
import type { Trail } from '@/models/Trail/types';
import theme from '@/theme';
import {
  Container, TrailListEmpty, TrailName, NumPlayers, MotionItem, MotionItemVariants,
} from './styles';

export type Props = {
  trailList : Trail[];
};

const UserTrailList:FC<Props> = ({ trailList }) => {
  const { t } = useLanguage();
  const router = useRouter();
  const handleRenderStatus = (trail: Trail) => {
    const status = Date.parse(trail.finishDate) > new Date().getTime();
    return status
      ? <span style={{ backgroundColor: theme.nord.blue2 }}>{t('trail_in_progress')}</span>
      : <span style={{ backgroundColor: theme.nord.green }}>{t('trail_finished')}</span>;
  };

  const handleClick = (trail:number) => {
    router.push('/trail/[id]', `/trail/${trail}`);
  };

  const handleRenderList = () => {
    if (trailList?.length !== 0) {
      return (
        trailList?.map((trail) => (
          <MotionItem
            key={trail.id}
            onClick={() => handleClick(trail.id)}
            variants={MotionItemVariants}
            animate="visible"
            initial="hidden"
            transition={{
              duration: 0.1,
              delay: 0.1 * trailList.indexOf(trail),
              opacity: { duration: 0.6, delay: 0.01 * trailList.indexOf(trail) },
            }}

          >
            <img
              alt="owner avatar"
              src={trail.owner.avatar}
              height={30}
              width={30}
            />
            <TrailName>{trail.name}</TrailName>
            <NumPlayers>
              {trail.users.length}
              /
              {trail.maxPlayers}
            </NumPlayers>
            <p>
              {handleRenderStatus(trail)}
            </p>
          </MotionItem>
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

export default UserTrailList;
