import type { FC } from 'react';
import React, { useMemo, useState } from 'react';
import {
  UserData, UserStats, UserTrailList, UserAverageRating, UserListsButtons,
} from '@/components/UserDetails';
import {
  Container, InfoDetails, StatsDetails, ListsDetails,
} from './styles';
import type { Props } from './types';
import { ButtonType } from './types';

const User: FC<Props> = ({ userData }) => {
  const [selectedButton, setSelectedButton] = useState<ButtonType>(ButtonType.Trail);

  const onUpdateButton = (button: ButtonType) => {
    setSelectedButton(button);
  };

  const handleRenderList = useMemo(() => {
    if (selectedButton === ButtonType.Trail) return <UserTrailList trailList={userData?.trailList} />;
    if (selectedButton === ButtonType.Games) return null;
    if (selectedButton === ButtonType.Comments) return null; // TODO: Call comment section here
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

      <UserListsButtons onUpdateButton={onUpdateButton} selectedButton={selectedButton} />
      <ListsDetails>
        {handleRenderList}
      </ListsDetails>
    </Container>
  );
};

export default User;
