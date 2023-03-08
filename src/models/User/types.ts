import type { GameList } from '../GameList/types';
import type { Rating } from '../Rating/types';

export enum Plan {
  Standard = 'STANDARD',
  Premium = 'PREMIUM',
}

export type User = {
  id: number,
  username: string,
  email: string,
  avatar: string,
  password: string,
  rating: Rating[],
  gameList: GameList[],
  plan: Plan
};
