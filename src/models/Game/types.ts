import type { TrailList } from '../TrailList/types';

export type Platform = {
  platform: string
};
export type Game = {
  id: number
  name: string
  genre: string
  platforms?: Platform[]
  releaseDate: string
  image: string
  photos: string
  description: string
  trailList: TrailList[]
};
