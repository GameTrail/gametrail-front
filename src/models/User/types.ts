import type { GameList } from '../GameList/types';
import type { Rating } from '../Rating/types';
import type { TrailList } from '../TrailList/types';

export type User = {
  id: number;
  username: string;
  auth_token: string;
  avatar: string;
  rating: Rating[] | [];
  gameList: GameList[] | [];
  trailList: TrailList[] | [];
};

export const normalizeUser = (user: any, token: string | null): User => ({
  id: user?.id ?? 0,
  username: user?.username ?? '',
  auth_token: token ?? '',
  avatar: user?.avatar ?? '',
  rating: user?.rating ?? [],
  gameList: user?.gameList ?? [],
  trailList: user?.trailList ?? [],
});
