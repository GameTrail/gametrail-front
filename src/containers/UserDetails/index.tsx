import type { FC } from 'react';
import React from 'react';
import type { UserDetails as UserDetailsProps } from '@/models/User/types';
import { Container } from './styles';

export type Props = {
  userData?: UserDetailsProps;
};

const UserDetails: FC<Props> = () => (
  <Container darkMode={false}>
    {/* <UserData userName={userData.username} />
    <UserStats />
    <UserGameList gameList={userData.gameList} /> */}
  </Container>
);

export default UserDetails;
