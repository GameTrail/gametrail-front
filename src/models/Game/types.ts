export type Platform = {
  platform: string
};
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
  platforms?: Platform[]
};
