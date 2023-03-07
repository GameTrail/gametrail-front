import type { GameList } from '../GameList/types';
import type { Rating } from '../Rating/type';

export type User = {
  id: number;
  username: string;
  rating: Rating[];
  gameList: GameList[];
};
