import type { FC } from 'react';
import React, { useEffect, useState } from 'react';

import { useGameTrail } from '@/hooks';
import type { Game } from '@/models/Game/types';
import { GameListState } from '@/models/GameList/types';
import { normalizeImage } from '@/utils/normalizeImage';
import {
  AddButton,
  Container, GameButtons, GameDescription, GameImage, GameInfo, GamePlatform, PlatformContainer, Title,
} from './styles';

export type Props = {
  gameDetails: Game
};

const GameData: FC<Props> = ({ gameDetails }) => {
  const { user, token } = useGameTrail();
  const [isHidden, setHidden] = useState <boolean>(false);
  async function checkGames() {
    const userGames = await fetch(`https://gametrail-backend-production.up.railway.app/api/gameList/?gameList__user=${user?.id}`);
    const userGamesData: [] = await userGames.json();
    const foundGame = userGamesData.find((game: { id : number }) => (game.id === gameDetails.id));
    if (foundGame) {
      setHidden(true);
    }
  }
  useEffect(() => {
    checkGames().then((r) => r);
  });
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
  const handleOnClick = async () => {
    if (user && token) {
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
            Authorization: `Token ${token}`,
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
