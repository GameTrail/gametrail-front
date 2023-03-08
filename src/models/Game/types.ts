import type { Comment } from '../Comment/types';

export type Game = {
  id: number
  name: string
  genre: string
  platform: string
  release: string
  image: string
  comments?: Comment[]
};
