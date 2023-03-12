import type { Game } from '../Game/types';
import type { User } from '../User/types';

export type TrailGang = {
  id: number;
  image: string;
  players: User[];
  games: Game[];
  startDate: string;
};
