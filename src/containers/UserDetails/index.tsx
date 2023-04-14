import type { FC } from 'react';
import React, { useMemo, useState } from 'react';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CommentsComponent } from '@/components/Comments';
import {
  UserData, UserStats, UserTrailList, UserAverageRating, UserListsButtons, UserGameList,
} from '@/components/UserDetails';
import KarmaToast from './KarmaToast';
import {
  Container, InfoDetails, StatsDetails, ListsDetails, KarmaInfo,
} from './styles';
import type { Props } from './types';
import { ButtonType } from './types';

const User: FC<Props> = ({ userData }) => {
  const [selectedButton, setSelectedButton] = useState<ButtonType>(ButtonType.Trail);
  const [karmaInfo, setKarmaInfo] = useState<boolean>(false);

  const onClickButton = (button: ButtonType) => {
    setSelectedButton(button);
  };

  const handleRenderList = useMemo(() => {
    if (selectedButton === ButtonType.Trail) return <UserTrailList trailList={userData.trails} />;
    if (selectedButton === ButtonType.Games) return <UserGameList userId={userData.id} />;
    if (selectedButton === ButtonType.Comments) return <CommentsComponent data={userData} type="user" />;
    return null;
  }, [selectedButton, userData]);

  const handleKarmaInfo = () => (
    setKarmaInfo(!karmaInfo)
  );

  const handleRenderKarmaInfo = useMemo(() => {
    if (!karmaInfo) return null;
    return <KarmaToast />;
  }, [karmaInfo]);

  return (
    <Container darkMode={false}>
      <InfoDetails darkMode={false}>
        <UserData user={userData} />
      </InfoDetails>

      {handleRenderKarmaInfo}
      <KarmaInfo>
        <button type="button" onClick={handleKarmaInfo}>
          <FontAwesomeIcon icon={faCircleQuestion} color="#31A4F1" size="1x" />
        </button>
        <h2>Karma</h2>
      </KarmaInfo>
      <StatsDetails>
        <UserAverageRating userRating={userData.average_ratings} />
        <UserStats userRating={userData.average_ratings} />
      </StatsDetails>

      <UserListsButtons onClickButton={onClickButton} selectedButton={selectedButton} />
      <ListsDetails>
        {handleRenderList}
      </ListsDetails>
    </Container>
  );
};

export default User;
