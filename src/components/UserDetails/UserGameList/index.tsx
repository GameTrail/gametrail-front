import React from 'react';
import type { FC } from 'react';
import type { GameList } from '@/models/GameList/types';

export type Props = {
  gameList: GameList[];
};

const UserGameList:FC<Props> = ({ gameList }) => (
  <div>
    {
    gameList.map(() => (
      <div>
        <p>Game Name</p>
        <p>Game Description</p>
      </div>
    ))
}
  </div>
);

export default UserGameList;
