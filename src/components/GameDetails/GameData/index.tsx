import type { FC } from 'react';
import React from 'react';
import type { Game } from '@/models/Game/types';
import { normalizeImage } from '@/utils/normalizeImage';
import {
  AddButton,
  Container, GameButtons, GameDescription, GameImage, GameInfo, GamePlatform, PlatformContainer, Title,
} from './styles';

export type Props = {
  gameDetails: Game
};
const GameData: FC<Props> = ({ gameDetails }) => {
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
          <AddButton>
            Añadir
          </AddButton>
        </GameButtons>

      </GameInfo>
    </Container>
  );
};

export default GameData;
