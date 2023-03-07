import { MOCK_USER_GAME_LIST } from '../GameList/mock';
import { MOCK_USER_RATING } from '../Rating/mock';
import type { User } from './types';

export const MOCK_USER: User = {
  id: 1,
  username: 'jvegax',
  rating: MOCK_USER_RATING,
  gameList: MOCK_USER_GAME_LIST,
};

export const MOCK_USERS: User[] = [{
  id: 1,
  username: 'jvegax',
  rating: MOCK_USER_RATING,
  gameList: MOCK_USER_GAME_LIST,
},
{
  id: 2,
  username: 'jvegax',
  rating: MOCK_USER_RATING,
  gameList: MOCK_USER_GAME_LIST,
},
{
  id: 3,
  username: 'jvegax',
  rating: MOCK_USER_RATING,
  gameList: MOCK_USER_GAME_LIST,
},
];
