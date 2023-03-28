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
  rate_recieved: Rating[] | [];
  comments_received: CommentsUser[] | [];
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
  rate_recieved: user?.rate_recieved ?? [],
  comments_received: user?.comments_received ?? [],
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
