import type { CommentsGame } from '../Comment/types';

export type Genre = {
  genre:string
};
export type Game = {
  id: number
  name: string
  releaseDate: string
  image: string
  photos:string
  description: string
  genre: Genre[] | string
  platforms?: string[]
  comments_games: CommentsGame[] | []
};
