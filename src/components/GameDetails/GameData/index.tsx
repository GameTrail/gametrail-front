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
      const data = new FormData();
      data.append('user', user.id.toString());
      data.append('game', gameDetails.id.toString());
      data.append('status', GameListState.PENDING);
      try {
        const res = await fetch('https://gametrail-backend-production.up.railway.app/api/gameList/game', {
          method: 'POST',
          body: JSON.stringify(data),
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
          <AddButton onClick={handleOnClick}>
            Añadir
          </AddButton>
        </GameButtons>

      </GameInfo>
    </Container>
  );
};

export default GameData;
