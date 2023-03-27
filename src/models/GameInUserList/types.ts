import type { Game } from '../Game/types';

export type GameInList = {
  id: number,
  game: Game,
  creationMoment: string,
  lastModified: string,
  status: string,
  gameList: number,
};

export type UserInDetails = {
  id: number,
  username: string,
  email: string,
  avatar: string,
  plan: string,
  games: GameInList[],
};
