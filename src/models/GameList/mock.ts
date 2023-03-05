import type { GameList } from './types';
import { GameListState } from './types';

export const MOCK_USER_GAME_LIST: GameList[] = [
  {
    id: 1,
    name: 'My Favorite Games',
    image: 'https://upload.wikimedia.org/wikipedia/en/5/56/Super_Mario_Bros._box_art.png',
    lastModified: '2021-08-01',
    state: GameListState.FINISHED,
  },
  {
    id: 2,
    name: 'My Favorite Games',
    image: 'https://upload.wikimedia.org/wikipedia/en/5/56/Super_Mario_Bros._box_art.png',
    lastModified: '2021-08-01',
    state: GameListState.PENDING,
  },
  {
    id: 3,
    name: 'My Favorite Games',
    image: 'https://upload.wikimedia.org/wikipedia/en/5/56/Super_Mario_Bros._box_art.png',
    lastModified: '2021-08-01',
    state: GameListState.PENDING,
  },
];
