import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import type { Game } from '@/models/Game/types';
import type { GameInList, UserInDetails } from '@/models/GameInUserList/types';
import { GameListState } from '@/models/GameList/types';
import { getUserCookie } from '@/utils/login';
import { normalizeImage } from '@/utils/normalizeImage';
import {
  AddButton,
  Container, GameButtons, GameDescription, GameImage, GameInListButton, GameInfo, GamePlatform, PlatformContainer, Title,
} from './styles';

export type Props = {
  gameDetails: Game
};

const GameData: FC<Props> = ({ gameDetails }) => {
  const user = getUserCookie();
  const token = user?.token;
  const [userGames, setUserGames] = useState<GameInList[]>([]);

  const handleRenderPlatform = () => {
    if (gameDetails !== null && gameDetails !== undefined) {
      return gameDetails.platforms?.map((platform) => (
        <GamePlatform platform={platform}>
          {platform}
        </GamePlatform>
      ));
    }
    return null;
  };
  const handleOnClick = async () => {
    if (user && token) {
      const requestData = {
        user: user.id.toString(),
        game: gameDetails.id.toString(),
        status: GameListState.PENDING.toString(),
      };
      try {
        const res = await fetch('https://gametrail-backend-production-8fc0.up.railway.app/api/gameList/game', {
          method: 'POST',
          body: JSON.stringify(requestData),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`,
          },
        });
        if (!res.ok) {
          throw new Error(res.statusText);
        }
      } catch (error) {
        throw new Error();
      }
    }
  };

  const checkGameInUserList = () => userGames.some((game) => (game.game.id === gameDetails.id));

  const handleRenderAddButton = () => {
    if (checkGameInUserList() && userGames.length !== 0) {
      return (
        <GameInListButton>
          En tu lista de juegos
        </GameInListButton>
      );
    }
    return (
      <AddButton onClick={handleOnClick}>
        Añadir
      </AddButton>
    );
  };

  useEffect(() => {
    const getUserGames = async (userId: number) => {
      const res = await fetch(`https://gametrail-backend-production-8fc0.up.railway.app/api/user/${userId}`);
      const data: UserInDetails = await res.json();
      setUserGames(data.games);
    };
    if (user) getUserGames(user.id);
  }, [user]);

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
          {user ? handleRenderAddButton() : null}
        </GameButtons>

      </GameInfo>
    </Container>
  );
};

export default GameData;
