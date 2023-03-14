import type { FC } from 'react';
import React, { useMemo, useState } from 'react';
import {
  UserData, UserStats, UserTrailList, UserAverageRating, UserListsButtons, UserGameList,
} from '@/components/UserDetails';
import CommentsContainer from '../CommentsContainer';
import {
  Container, InfoDetails, StatsDetails, ListsDetails,
} from './styles';
import type { Props } from './types';
import { ButtonType } from './types';

const User: FC<Props> = ({ userData }) => {
  const [selectedButton, setSelectedButton] = useState<ButtonType>(ButtonType.Trail);
  const authToken = '12345xcvxcb';
  const onClickButton = (button: ButtonType) => {
    setSelectedButton(button);
  };

  const handleRenderList = useMemo(() => {
    if (selectedButton === ButtonType.Trail) return <UserTrailList trailList={userData?.trailList} />;
    if (selectedButton === ButtonType.Games) return <UserGameList gameList={userData?.gameList} />;
    if (selectedButton === ButtonType.Comments) return <CommentsContainer auth_token={authToken} id={userData.id} type="user" key="userCommentsContainer" />;
    return null;
  }, [selectedButton, userData]);

  return (
    <Container darkMode={false}>
      <InfoDetails darkMode={false}>
        <UserData userName={userData.username} userAvatar={userData.profilePicture} />
      </InfoDetails>
      <h2>Stats</h2>
      <StatsDetails>
        <UserAverageRating userRating={userData.rating} />
        <UserStats userRating={userData.rating} />
      </StatsDetails>

      <UserListsButtons onClickButton={onClickButton} selectedButton={selectedButton} />
      <ListsDetails>
        {handleRenderList}
      </ListsDetails>
    </Container>
  );
};

export default User;
