import React from 'react';
import type { FC } from 'react';
import Image from 'next/image';
import router from 'next/router';
import type { Trail } from '@/models/Trail/types';
import { Item, Container } from './styles';

export type Props = {
  trailList : Trail[]
};

const GameTrailList:FC<Props> = ({ trailList }) => {
  const handleRenderStatus = (trail: Trail) => {
    const status = Date.parse(trail.finishDate) > new Date().getTime();
    return status
      ? <span style={{ backgroundColor: '#5e81ac' }}>In progress</span>
      : <span style={{ backgroundColor: '#a3be8c' }}>Completed</span>;
  };

  const handleClickTrailDetails: any = (id: number) => {
    router.push(`/trail/${id}`);
  };

  const handleRenderList = () => trailList?.map((trail) => (
    <Item key={trail.id} onClick={() => handleClickTrailDetails(trail.id)}>
      <Image
        alt={trail.owner.username}
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
  ));

  return (
    <Container>
      {handleRenderList()}
    </Container>

  );
};

export default GameTrailList;
