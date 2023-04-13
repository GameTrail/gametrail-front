export enum RatingType {
  KINDNESS = 'kindness',
  FUNNY = 'funny',
  TEAMWORK = 'teamwork',
  AVAILABILITY = 'availability',
  ABILITY = 'ability',
}

export type Rating = {
  kindness: number,
  funny: number,
  teamwork: number,
  availability: number,
  ability: number,
} | null;

export type RatingNull = {
  type: RatingType;
  rating: number | string;
  ratedUser?: string,
  userWhoRate?: string
};
