import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import type { Game } from '@/models/Game/types';
import type { GameInList, UserInDetails } from '@/models/GameInUserList/types';
import { GameListState } from '@/models/GameList/types';
import { getUserCookie } from '@/utils/login';
import { normalizeImage } from '@/utils/normalizeImage';
import {
  AddButton,
  Container, GameButtons, GameDescription, GameImage, GameInfo, GamePlatform, PlatformContainer, Title,
} from './styles';

export type Props = {
  gameDetails: Game
};

const GameData: FC<Props> = ({ gameDetails }) => {
  const user = getUserCookie();
  const [isHidden, setHidden] = useState <boolean>(false);
  async function checkGames() {
    if (!user) {
      setHidden(true);
      return;
    }
    const userData = await fetch(`https://gametrail-backend-production.up.railway.app/api/user/${user.id}`);
    const userGamesData: UserInDetails = await userData.json();
    const foundGame = userGamesData.games.find((game: GameInList) => (game.game.id === gameDetails.id));
    setHidden(!!foundGame);
  }
  const handleRenderPlatform = () => {
    if (gameDetails !== null && gameDetails !== undefined) {
      return gameDetails.platforms?.map((platform) => (
        <GamePlatform platform={platform.platform}>
          {platform.platform}
        </GamePlatform>
      ));
    }
    return null;
  };
  useEffect(() => {
    checkGames().then((r) => r);
  });
  const handleOnClick = async () => {
    if (user && user.auth_token) {
      const requestData = {
        user: user.id.toString(),
        game: gameDetails.id.toString(),
        status: GameListState.PENDING.toString(),
      };
      try {
        const res = await fetch('https://gametrail-backend-production.up.railway.app/api/gameList/game', {
          method: 'POST',
          body: JSON.stringify(requestData),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${user.auth_token}`,
          },
        });
        if (!res.ok) {
          throw new Error(res.statusText);
        }
      } catch (error) {
        throw new Error();
      } finally {
        setHidden(true);
      }
    }
  };

  return (
    <Container>
      <GameImage src={normalizeImage(gameDetails.image)} width={250} height={375} alt="No hay imagen" />
      <GameInfo>
        <Title>{gameDetails.name}</Title>
        <GameDescription>
          {gameDetails.description}
        </GameDescription>
        <GameButtons>
          <PlatformContainer>
            {handleRenderPlatform()}
          </PlatformContainer>
          <AddButton onClick={handleOnClick} ishidden={isHidden}>
            Añadir
          </AddButton>
        </GameButtons>

      </GameInfo>
    </Container>
  );
};

export default GameData;
