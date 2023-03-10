export enum GameListState {
  PLAYING = 'PLAYING',
  PENDING = 'PENDING',
  FINISHED = 'FINISHED',
}

export type GameList = {
  id: number
  name: string
  image: string
  lastModified: string
  state: GameListState
};
