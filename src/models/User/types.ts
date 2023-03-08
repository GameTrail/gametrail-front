import type { GameList } from '../GameList/types';
import type { Rating } from '../Rating/type';
import type { TrailList } from '../TrailList/types';

export type UserDetails = {
  id: number;
  username: string;
  avatar: string;
  rating: Rating[];
  gameList: GameList[];
  trailList: TrailList[];
};
