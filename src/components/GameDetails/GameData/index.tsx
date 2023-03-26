import type { FC } from 'react';
import React from 'react';
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
  const userList = user?.games.id;
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
  const handleClick = async (game : number) => {
    if (user && token && userList) {
      const data = new FormData();
      data.append('authToken', token);
      data.append('gameList', userList.toString());
      data.append('game', game.toString());
      data.append('status', GameListState.PENDING);
      console.log(data);
      try {
        const res = await fetch('https://gametrail-backend-production.up.railway.app/api/gameList/game/', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
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

  const addButton = (game: Game) => {
    if (user && user.games.games) {
      if (!user.games.games.find((x) => game.id === x.id)) {
        return (
          <AddButton onClick={(() => handleClick(gameDetails.id))}>
            Añadir
          </AddButton>
        );
      }
      return (
        <AddButton>
          En tu Lista
        </AddButton>
      );
    } if (user && user.games) {
      return (
        <AddButton onClick={(() => handleClick(gameDetails.id))}>
          Añadir
        </AddButton>
      );
    }
    return null;
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
          {addButton(gameDetails)}
        </GameButtons>

      </GameInfo>
    </Container>
  );
};

export default GameData;
