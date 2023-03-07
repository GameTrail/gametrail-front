import type { FC } from 'react';
import React from 'react';
import type { User as UserDetailsProps } from '@/models/User/types';
import { Container } from './styles';

export type Props = {
  userData: UserDetailsProps;
};

const User: FC<Props> = () => (
  <Container darkMode={false}>
    {/* <UserData userName={userData.username} />
    <UserStats />
    <UserGameList gameList={userData.gameList} /> */}
  </Container>
);

export default User;
