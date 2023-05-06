import type { FC } from 'react';
import React from 'react';
import useLanguage from '@/i18n/hooks';
import type { GameList } from '@/models/GameList/types';
import { parseGameListDate } from '@/utils/parseGameListDate';
import {
  Added, GameData, GameImage, GameInfo, LastModified, MotionGame, MotionGameVariants, Name, State,
} from './styles';

interface Props {
  gameListItem: GameList;
  onUpdateGameStatus: (gameListItem: GameList) => void;
  index: number;
}
const UserGameCard: FC<Props> = ({ gameListItem, onUpdateGameStatus, index }) => {
  const { t } = useLanguage();
  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onUpdateGameStatus(gameListItem);
  };

  return (
    <MotionGame
      href={`/game/${gameListItem.game.id}`}
      variants={MotionGameVariants}
      animate="visible"
      initial="hidden"
      transition={{
        duration: 0.1,
        delay: 0.1 * index,
        opacity: { duration: 0.6, delay: 0.01 * index },
      }}
    >
      <div>
        <GameImage src={`https://${gameListItem.game.image}`} alt="image" />
      </div>
      <GameData>
        <Name>
          {gameListItem.game.name}
        </Name>
        <GameInfo>
          <Added>
            <h4>{t('added')}</h4>
            {parseGameListDate(gameListItem.creationMoment)}
          </Added>
          <LastModified>
            <h4>{t('last_modified')}</h4>
            {parseGameListDate(gameListItem.lastModified)}
          </LastModified>
          <State onClick={onClick} state={gameListItem.status}>{gameListItem.status}</State>
        </GameInfo>
      </GameData>
    </MotionGame>
  );
};

export default UserGameCard;
