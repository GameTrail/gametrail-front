import type { FC } from 'react';
import React from 'react';
import {
  UserData, UserStats, UserGameList, UserTrailList, UserAverageRating, UserListsButtons,
} from '@/components/UserDetails';
import type { UserDetails as UserDetailsProps } from '@/models/User/types';
import {
  Container, InfoDetails, StatsDetails, ListsDetails,
} from './styles';

export type Props = {
  userData: UserDetailsProps;
};

const UserDetails: FC<Props> = ({ userData }) => (
  <Container darkMode={false}>
    <InfoDetails darkMode={false}>
      <UserData userName={userData.username} userAvatar={userData.avatar} />
    </InfoDetails>

    <h2>Stats</h2>
    <StatsDetails>
      <UserAverageRating userRating={userData.rating} />
      <UserStats userRating={userData.rating} />
    </StatsDetails>

    <UserListsButtons />
    <ListsDetails>
      {/* <UserGameList gameList={userData.gameList} /> */}
      <UserTrailList trailList={userData.trailList} />
    </ListsDetails>

  </Container>
);

export default UserDetails;
