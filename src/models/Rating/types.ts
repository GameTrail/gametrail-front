export enum RatingType {
  KINDNESS = 'KINDNESS',
  FUNNY = 'FUNNY',
  TEAMWORK = 'TEAMWORK',
  AVAILABILITY = 'AVAILABILITY',
  ABILITY = 'ABILITY',
}

export type Rating = {
  type: RatingType;
  rating: number;
  ratedUser?: string,
  userWhoRate?: string
};
