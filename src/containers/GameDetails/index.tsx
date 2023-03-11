import type { FC } from 'react';
import React, { useMemo, useState } from 'react';
import { GameData, GameImages, GameTrailList } from '@/components/GameDetails';
import GameListsButtons from '@/components/GameDetails/GameListsButtons';
import type { Game } from '@/models/Game/types';
import { Container, ListsDetails } from './style';
import { ButtonType } from './types';

export type Props = {
  gameDetails: Game
};
const GameDetails:FC<Props> = ({ gameDetails }) => {
  const [selectedButton, setSelectedButton] = useState<ButtonType>(ButtonType.Trail);

  const onClickButton = (button: ButtonType) => {
    setSelectedButton(button);
  };

  const handleRenderList = useMemo(() => {
    if (selectedButton === ButtonType.Trail) return <GameTrailList trailList={gameDetails?.trailList} />;
    if (selectedButton === ButtonType.Comments) return null; // TODO: Call comment section here
    return null;
  }, [selectedButton, gameDetails]);
  return (
    <Container>
      <GameData gameDetails={gameDetails} />
      <GameListsButtons onClickButton={onClickButton} selectedButton={selectedButton} />
      <ListsDetails>
        {handleRenderList}
      </ListsDetails>
      <GameImages gameDetails={gameDetails} />
    </Container>
  );
};

export default GameDetails;
