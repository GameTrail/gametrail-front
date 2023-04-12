import type { FC } from 'react';
import React, { useMemo, useState } from 'react';
import { CommentsComponent } from '@/components/Comments';
import { GameData, GameImages, GameTrailList } from '@/components/GameDetails';
import GameListsButtons from '@/components/GameDetails/GameListsButtons';
import type { Game } from '@/models/Game/types';
import type { Trail } from '@/models/Trail/types';
import { Container, ListsDetails } from './style';
import { ButtonType } from './types';

export type Props = {
  gameDetails: Game
  trailData: Trail[];
};
const GameDetails:FC<Props> = ({ gameDetails, trailData }) => {
  const [selectedButton, setSelectedButton] = useState<ButtonType>(ButtonType.Trail);
  const onClickButton = (button: ButtonType) => {
    setSelectedButton(button);
  };

  const handleRenderList = useMemo(() => {
    if (selectedButton === ButtonType.Trail) return <GameTrailList trailList={trailData} />;
    if (selectedButton === ButtonType.Comments) return <CommentsComponent data={gameDetails} type="game" />;
    return null;
  }, [selectedButton, trailData, gameDetails]);
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
