import type { TrailList } from '../TrailList/types';

export type Game = {
  id: number
  name: string
  genre: string
  platforms?: string[]
  releaseDate: string
  image: string
  photos: string
  description: string
  trailList: TrailList[];
};
