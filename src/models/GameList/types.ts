import type { Game } from '../Game/types';

export enum GameListState {
  PLAYING = 'PLAYING',
  PENDING = 'PENDING',
  FINISHED = 'FINISHED',
}

export type GameList = {
  id: number
  game: Game
  name: string
  creationMoment: string
  lastModified: string
  status: GameListState
  gameList:number
};
