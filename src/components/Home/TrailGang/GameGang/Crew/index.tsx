import React from 'react';
import type { FC } from 'react';
import type { Trail as TrailGangProps } from '@/models/Trail/types';
import {
  Container, Player, ProfilePicture, UserName,
} from './styles';

export type Props = {
  trailGang: TrailGangProps;
};

const TrailCrew:FC<Props> = ({ trailGang }) => {
  const handleRenderUser = () => trailGang?.users?.map((user) => (
    <Player href={`/user/${user?.id}`}>
      <ProfilePicture src={user?.avatar} alt="image" width={120} height={120} />
      <UserName>{user?.username}</UserName>
    </Player>
  ));
  return (
    <Container>
      {handleRenderUser()}
    </Container>
  );
};

export default TrailCrew;
