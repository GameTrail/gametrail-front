import type { FC } from 'react';
import React from 'react';
import type { GameList } from '@/models/GameList/types';
import { parseGameListDate } from '@/utils/parseGameListDate';
import {
  Added, Game, GameData, GameImage, GameInfo, LastModified, Name, State,
} from './styles';

interface Props {
  gameListItem: GameList;
  onUpdateGameStatus: (gameListItem: GameList) => void;
}
const UserGameCard: FC<Props> = ({ gameListItem, onUpdateGameStatus }) => {
  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onUpdateGameStatus(gameListItem);
  };

  return (
    <Game href={`/game/${gameListItem.game.id}`}>
      <div>
        <GameImage src={`https://${gameListItem.game.image}`} alt="image" />
      </div>
      <GameData>
        <Name>
          {gameListItem.game.name}
        </Name>
        <GameInfo>
          <Added>
            <h4>Añadido</h4>
            {parseGameListDate(gameListItem.creationMoment)}
          </Added>
          <LastModified>
            <h4>Última vez modificado</h4>
            {parseGameListDate(gameListItem.lastModified)}
          </LastModified>
          <State onClick={onClick} state={gameListItem.status}>{gameListItem.status}</State>
        </GameInfo>
      </GameData>
    </Game>
  );
};

export default UserGameCard;
