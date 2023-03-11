import { MOCK_USER_GAME_LIST } from '../GameList/mock';
import { MOCK_USER_RATING } from '../Rating/mock';
import { MOCK_USER_TRAIL_LIST } from '../TrailList/mock';
import type { User } from './types';

export const MOCK_USER: User = {
  id: 1,
  username: 'jvegax',
  auth_token: 'UnLYDil4Pof7z?t9Yd2cUqCA9sfwXdEqkV5ag3c9ZjPJ0xDkCR!q0RS9LQzCB79f',
  profilePicture: 'https://cdnb.artstation.com/p/assets/images/images/035/213/423/large/mcashe-titanzekeef-dev.jpg?1614374087',
  rating: MOCK_USER_RATING,
  gameList: MOCK_USER_GAME_LIST,
  trailList: MOCK_USER_TRAIL_LIST,
};

export const MOCK_USERS: User[] = [
  {
    id: 1,
    username: 'jvegax',
    auth_token: 'UnLYDil4Pof7z?t9Yd2cUqCA9sfwXdEqkV5ag3c9ZjPJ0xDkCR!q0RS9LQzCB79f',
    profilePicture: '/images/Prf.jpg',
    rating: MOCK_USER_RATING,
    gameList: MOCK_USER_GAME_LIST,
  },
  {
    id: 2,
    username: 'josmarlop',
    auth_token: 'WbdwbFITQcnKoDepB9W7eXhhE76l?WSu2vY3WW9omlU2FoifSOblb5WBxDEBr-Zw',
    profilePicture: '/images/Prf.jpg',
    rating: MOCK_USER_RATING,
    gameList: MOCK_USER_GAME_LIST,
  },
  {
    id: 3,
    username: 'joscacgom',
    auth_token: '9JKWUKn0QO!Fn3XiFL6Rf-BUEFOIBj5CK5?=7n?aC-=X4uiTgMloDeHUXD3Ho7MZ',
    profilePicture: '/images/Prf.jpg',
    rating: MOCK_USER_RATING,
    gameList: MOCK_USER_GAME_LIST,
  },
];
