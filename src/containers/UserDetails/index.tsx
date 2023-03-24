import type { FC } from 'react';
import React, { useMemo, useState } from 'react';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  UserData, UserStats, UserTrailList, UserAverageRating, UserListsButtons, UserGameList,
} from '@/components/UserDetails';
import CommentsContainer from '../CommentsContainer';
import {
  Container, InfoDetails, StatsDetails, ListsDetails, KarmaInfo, KarmaInfoToast,
} from './styles';
import type { Props } from './types';
import { ButtonType } from './types';

const User: FC<Props> = ({ userData }) => {
  const [selectedButton, setSelectedButton] = useState<ButtonType>(ButtonType.Trail);
  const [karmaInfo, setKarmaInfo] = useState<boolean>(false);
  const authToken = '12345xcvxcb';
  const onClickButton = (button: ButtonType) => {
    setSelectedButton(button);
  };

  const handleRenderList = useMemo(() => {
    if (selectedButton === ButtonType.Trail) return <UserTrailList trailList={userData?.trails || []} />;
    if (selectedButton === ButtonType.Games) return <UserGameList gameList={userData?.games || []} />;
    if (selectedButton === ButtonType.Comments) return <CommentsContainer auth_token={authToken} id={userData.id} type="user" key="userCommentsContainer" />;
    return null;
  }, [selectedButton, userData]);

  const handleKarmaInfo = () => (
    setKarmaInfo(!karmaInfo)
  );

  const handleRenderKarmaInfo = useMemo(() => {
    if (karmaInfo) {
      return (
        <KarmaInfoToast>
          <p>
            El karma mide la reputación de un usuario de GameTrail en base a 5 medidas:
            <br />
          </p>
          <ol>
            <li>
              <b>Amabilidad</b>
              {' '}
            </li>
            <li>
              <b>Habilidad</b>
              {' '}
            </li>
            <li>
              <b>Disponibilidad</b>
              {' '}
            </li>
            <li>
              <b>Diversión</b>
              {' '}
            </li>
            <li>
              <b>Cooperación</b>
              {' '}
            </li>
          </ol>
          <p>
            El karma corresponde a la valoración media de estas 5 métricas.
          </p>
        </KarmaInfoToast>
      );
    }
    return null;
  }, [karmaInfo]);

  return (
    <Container darkMode={false}>
      <InfoDetails darkMode={false}>
        <UserData userName={userData.username} userAvatar={userData.avatar} />
      </InfoDetails>
      {handleRenderKarmaInfo}
      <KarmaInfo>
        <button type="button" onClick={handleKarmaInfo}>
          <FontAwesomeIcon icon={faCircleQuestion} color="#31A4F1" size="1x" />
        </button>
        <h2>Karma</h2>
      </KarmaInfo>
      <StatsDetails>
        <UserAverageRating userRating={userData.rate_recieved} />
        <UserStats userRating={userData.rate_recieved} />
      </StatsDetails>

      <UserListsButtons onClickButton={onClickButton} selectedButton={selectedButton} />
      <ListsDetails>
        {handleRenderList}
      </ListsDetails>
    </Container>
  );
};

export default User;
