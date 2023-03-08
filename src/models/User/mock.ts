import { MOCK_USER_GAME_LIST } from '../GameList/mock';
import { MOCK_USER_RATING } from '../Rating/mock';
import { Plan } from './types';
import type { User } from './types';

export const MOCK_USERS: User[] = [
  {
    id: 1,
    username: 'LuisUsrDev',
    email: 'luisUsrDev@gmail.com',
    avatar: 'https://img.lovepik.com/free-png/20211208/lovepik-male-avatar-silhouette-png-image_401422660_wh1200.png',
    password: 'LuisUsrDevpass',
    rating: MOCK_USER_RATING,
    gameList: MOCK_USER_GAME_LIST,
    plan: Plan.Premium,
  },
  {
    id: 2,
    username: 'jvegax',
    email: 'jvegax@gmail.com',
    avatar: 'https://img.lovepik.com/free-png/20211208/lovepik-male-avatar-silhouette-png-image_401422660_wh1200.png',
    password: 'jvegaxpass',
    rating: MOCK_USER_RATING,
    gameList: MOCK_USER_GAME_LIST,
    plan: Plan.Premium,
  },
];

export const MOCK_USER: User = {
  id: 1,
  username: 'LuisUsrDev',
  email: 'luisUsrDev@gmail.com',
  avatar: 'https://img.lovepik.com/free-png/20211208/lovepik-male-avatar-silhouette-png-image_401422660_wh1200.png',
  password: 'LuisUsrDevpass',
  rating: MOCK_USER_RATING,
  gameList: MOCK_USER_GAME_LIST,
  plan: Plan.Premium,
};
