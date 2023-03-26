import React from 'react';
import type { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import NotFoundList from '@/components/Lotties/User/NotFoundList';
import type { Trail } from '@/models/Trail/types';
import { Item, Container, TrailListEmpty } from './styles';

export type Props = {
  trailList : Trail[];
};

const UserTrailList:FC<Props> = ({ trailList }) => {
  const router = useRouter();
  const handleRenderStatus = (trail: Trail) => {
    const status = Date.parse(trail.finishDate) > new Date().getTime();
    return status
      ? <span style={{ backgroundColor: '#5e81ac' }}>In progress</span>
      : <span style={{ backgroundColor: '#a3be8c' }}>Completed</span>;
  };

  const handleClick = (trail:number) => {
    router.push('/trail/[id]', `/trail/${trail}`);
  };

  const handleRenderList = () => {
    if (trailList?.length !== 0) {
      return (
        trailList?.map((trail) => (
          <Item key={trail.id} onClick={() => handleClick(trail.id)}>
            <Image
              alt="owner avatar"
              src={trail.owner.avatar}
              height={30}
              width={30}
            />
            <p>{trail.name}</p>
            <p>
              2/
              {trail.maxPlayers}
            </p>
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

export default UserTrailList;
