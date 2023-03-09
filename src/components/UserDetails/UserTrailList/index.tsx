import React from 'react';
import type { FC } from 'react';
import Image from 'next/image';
import type { TrailList } from '@/models/TrailList/types';
import { Item, Container } from './styles';

export type Props = {
  trailList : TrailList[] | undefined;
};

const UserTrailList:FC<Props> = ({ trailList }) => (
  <Container>
    {trailList?.map((trail) => (
      <Item key={trail.id}>
        <Image alt="jvegax" src="https://cdnb.artstation.com/p/assets/images/images/035/213/423/large/mcashe-titanzekeef-dev.jpg?1614374087" height={30} width={30} />
        <p>{trail.name}</p>
        <p>
          2/
          {trail.maxPlayers}
        </p>
        <p>
          {Date.parse(trail.endDate) > new Date().getTime()
            ? <span style={{ backgroundColor: '#5e81ac' }}>In progress</span>

            : <span style={{ backgroundColor: '#a3be8c' }}>Completed</span>}
        </p>
      </Item>
    ))}
  </Container>

);

export default UserTrailList;
