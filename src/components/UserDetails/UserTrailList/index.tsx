import { TrailList } from '@/models/TrailList/types';
import React from 'react'
import type { FC } from 'react';
import { Item } from './styles';

export type Props = {
  trailList : TrailList[]
};

const UserTrailList:FC<Props> = ({ trailList }) => (
  <div>
    {trailList.map((trail) => (
    <Item key={trail.id}>
      <p>{trail.name}</p>
      <p>{trail.maxPlayers}</p>
      <p>{trail.endDate > new Date()? 'On going' : 'Finished'}</p>
    </Item>
  ))}
  </div>
  

);

export default UserTrailList;
