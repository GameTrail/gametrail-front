import { MOCK_GAMES } from '../Game/mock';
import type { GameList } from './types';
import { GameListState } from './types';

export const MOCK_USER_GAME_LIST: GameList[] = [
  {
    id: 1,
    name: 'My Favorite Games',
    image: 'https://cdnb.artstation.com/p/assets/images/images/035/213/423/large/mcashe-titanzekeef-dev.jpg?1614374087',
    lastModified: '2021-08-01',
    state: GameListState.FINISHED,
    games: MOCK_GAMES,
  },
  {
    id: 2,
    name: 'My Favorite Games',
    image: 'https://cdnb.artstation.com/p/assets/images/images/035/213/423/large/mcashe-titanzekeef-dev.jpg?1614374087',
    lastModified: '2021-08-01',
    state: GameListState.PENDING,
    games: MOCK_GAMES,
  },
  {
    id: 3,
    name: 'My Favorite Games',
    image: 'https://cdnb.artstation.com/p/assets/images/images/035/213/423/large/mcashe-titanzekeef-dev.jpg?1614374087',
    lastModified: '2021-08-01',
    state: GameListState.PLAYING,
    games: MOCK_GAMES,
  },
];
