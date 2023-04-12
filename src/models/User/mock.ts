import { MOCK_USER_GAME_LIST } from '../GameList/mock';
import type { User } from './types';

export const MOCK_USER: User = {
  id: 1,
  username: 'jvegax',
  auth_token: 'UnLYDil4Pof7z?t9Yd2cUqCA9sfwXdEqkV5ag3c9ZjPJ0xDkCR!q0RS9LQzCB79f',
  avatar: 'https://cdnb.artstation.com/p/assets/images/images/035/213/423/large/mcashe-titanzekeef-dev.jpg?1614374087',
  average_ratings: [],
  games: MOCK_USER_GAME_LIST,
  email: '',
  plan: '',
  comments_recieved: [],
  trails: [],
};

export const MOCK_USERS: User[] = [
  {
    id: 1,
    username: 'jvegax',
    email: '',
    plan: 'PREMIUM',
    auth_token: 'UnLYDil4Pof7z?t9Yd2cUqCA9sfwXdEqkV5ag3c9ZjPJ0xDkCR!q0RS9LQzCB79f',
    avatar: '/images/Prf.jpg',
    average_ratings: [],
    games: MOCK_USER_GAME_LIST,
    trails: [],
    comments_recieved: [],
  },
  {
    id: 2,
    username: 'josmarlop',
    email: '',
    plan: 'PREMIUM',
    auth_token: 'WbdwbFITQcnKoDepB9W7eXhhE76l?WSu2vY3WW9omlU2FoifSOblb5WBxDEBr-Zw',
    avatar: '/images/Prf.jpg',
    average_ratings: [],
    games: MOCK_USER_GAME_LIST,
    trails: [],
    comments_recieved: [],
  },
  {
    id: 3,
    username: 'joscacgom',
    email: '',
    plan: 'PREMIUM',
    auth_token: '9JKWUKn0QO!Fn3XiFL6Rf-BUEFOIBj5CK5?=7n?aC-=X4uiTgMloDeHUXD3Ho7MZ',
    avatar: '/images/Prf.jpg',
    average_ratings: [],
    games: MOCK_USER_GAME_LIST,
    trails: [],
    comments_recieved: [],
  },
];
