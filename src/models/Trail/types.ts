import type { Game } from '../Game/types';
import type { User } from '../User/types';

export type Trail = {
  id: number;
  name: string;
  description: string;
  startDate: string;
  finishDate: string;
  maxPlayers: number;
  owner: User,
  games: Game[],
  users: User[],
};
