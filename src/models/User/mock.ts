import { MOCK_USER_GAME_LIST } from '../GameList/mock';
import { MOCK_USER_RATING } from '../Rating/mock';
import { MOCK_USER_TRAIL_LIST } from '../TrailList/mock';
import type { User } from './types';

export const MOCK_USER: User = {
  id: 1,
  username: 'jvegax',
  profilePicture: 'https://cdnb.artstation.com/p/assets/images/images/035/213/423/large/mcashe-titanzekeef-dev.jpg?1614374087',
  rating: MOCK_USER_RATING,
  gameList: MOCK_USER_GAME_LIST,
  trailList: MOCK_USER_TRAIL_LIST,
};

export const MOCK_USERS: User[] = [
  {
    id: 1,
    username: 'jvegax',
    profilePicture: '/images/Prf.jpg',
    rating: MOCK_USER_RATING,
    gameList: MOCK_USER_GAME_LIST,
  },
  {
    id: 2,
    username: 'josmarlop',
    profilePicture: '/images/Prf.jpg',
    rating: MOCK_USER_RATING,
    gameList: MOCK_USER_GAME_LIST,
  },
  {
    id: 3,
    username: 'joscacgom',
    profilePicture: '/images/Prf.jpg',
    rating: MOCK_USER_RATING,
    gameList: MOCK_USER_GAME_LIST,
  },
];
