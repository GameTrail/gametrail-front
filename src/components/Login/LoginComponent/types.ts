import type { GameList } from '@/models/GameList/types';
import type { Rating } from '@/models/Rating/types';
import type { Trail } from '@/models/Trail/types';

export type UserCredentials = {
  username: string;
  password: string;
};

export type UserCookie = {
  token: string;
  id: number;
  username: string;
  email: string;
  auth_token: string;
  avatar: string;
  plan: string;
  games: [] | GameList[];
  trails: Trail[] | [];
  average_ratings: [] | Rating[];
  comments_recieved: [] | Comment[];
};

export type MinUser = {
  token: string;
  id: number;
  username: string;
  email: string;
  auth_token: string;
  avatar: string;
  plan: string;
};
