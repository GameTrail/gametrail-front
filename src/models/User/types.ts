import type { MinUser, UserCookie } from '@/components/Login/LoginComponent/types';
import type { CommentsUser } from '../Comment/types';
import type { GameList } from '../GameList/types';
import type { Rating } from '../Rating/types';
import type { Trail } from '../Trail/types';

export type User = {
  id: number;
  username: string;
  email: string;
  auth_token: string;
  avatar: string;
  plan: string;
  games: GameList[] | [];
  trails: Trail[] | [];
  average_ratings: Rating;
  comments_recieved: CommentsUser[] | [];
};

export const normalizeUserCookie = (user: any, token: string): UserCookie => ({
  id: user?.id ?? 0,
  token: token ?? '',
  username: user?.username ?? '',
  email: user?.email ?? '',
  auth_token: token ?? '',
  avatar: user?.avatar ?? '',
  plan: user?.plan ?? '',
  games: user?.gammes ?? [],
  trails: user?.trails ?? [],
  average_ratings: user?.average_ratings ?? [],
  comments_recieved: user?.comments_recieved ?? [],
});

export const minimizeUserCookie = (user: UserCookie, token: string): MinUser => ({
  id: user?.id ?? 0,
  token: token ?? '',
  username: user?.username ?? '',
  email: user?.email ?? '',
  auth_token: token ?? '',
  avatar: user?.avatar ?? '',
  plan: user?.plan ?? '',
});
