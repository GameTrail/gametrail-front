import { MOCK_USER_GAME_LIST } from '../GameList/mock';
import { MOCK_USER_RATING } from '../Rating/mock';
import type { UserDetails } from './types';

export const MOCK_USER_DETAILS: UserDetails[] = [
  {
    id: 1,
    username: 'jvegax',
    rating: MOCK_USER_RATING,
    gameList: MOCK_USER_GAME_LIST,
  },
  {
    id: 2,
    username: 'mecdres',
    rating: MOCK_USER_RATING,
    gameList: MOCK_USER_GAME_LIST,
  },
  {
    id: 3,
    username: 'imsakiller',
    rating: MOCK_USER_RATING,
    gameList: MOCK_USER_GAME_LIST,
  },
];
