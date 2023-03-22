import React from 'react';
import type { FC } from 'react';
import Image from 'next/image';
import type { TrailList } from '@/models/TrailList/types';
import { Item, Container } from './styles';

export type Props = {
  trailList : TrailList[]
};

const GameTrailList:FC<Props> = ({ trailList }) => {
  const handleRenderStatus = (trail: TrailList) => {
    const status = Date.parse(trail.endDate) > new Date().getTime();
    return status
      ? <span style={{ backgroundColor: '#5e81ac' }}>In progress</span>
      : <span style={{ backgroundColor: '#a3be8c' }}>Completed</span>;
  };

  const handleRenderList = () => trailList?.map((trail) => (
    <Item key={trail.id}>
      <Image
        alt={trail.owner.username}
        src={trail.owner.username}
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
