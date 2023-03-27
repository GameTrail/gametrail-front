import { MOCK_GAMES } from '../Game/mock';
import type { GameList } from './types';
import { GameListState } from './types';

export const MOCK_USER_GAME_LIST: GameList[] = [
  {
    id: 1,
    status: GameListState.FINISHED,
    creationMoment: '2021-08-01',
    lastModified: '2021-08-01',
    game: MOCK_GAMES[1],
    gameList: 1,
  },
  {
    id: 2,
    status: GameListState.FINISHED,
    creationMoment: '2021-08-01',
    lastModified: '2021-08-01',
    game: MOCK_GAMES[1],
    gameList: 1,
  },
  {
    id: 3,
    status: GameListState.FINISHED,
    creationMoment: '2021-08-01',
    lastModified: '2021-08-01',
    game: MOCK_GAMES[1],
    gameList: 1,
  },
];
