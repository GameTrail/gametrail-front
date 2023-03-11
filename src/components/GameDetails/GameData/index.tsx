import type { FC } from 'react';
import React from 'react';
import type { Game } from '@/models/Game/types';
import {
  AddButton,
  Container, GameButtons, GameDescription, GameImage, GameInfo, GamePlatform, PlatformContainer, Title,
} from './styles';

export type Props = {
  gameDetails: Game
};
const GameData: FC<Props> = ({ gameDetails }) => {
  const handleRenderPlatform = () => gameDetails.platforms.map((platform) => (
    <GamePlatform platform={platform}>
      {platform}
    </GamePlatform>
  ));
  return (
    <Container>
      <GameImage src={gameDetails.image} width={250} height={375} alt="No hay imagen" />
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
