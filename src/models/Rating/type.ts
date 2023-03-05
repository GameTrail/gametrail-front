export enum RatingType {
  Kindness = 'Kindness',
  Funny = 'Funny',
  Teamwork = 'Teamwork',
  Availability = 'Availability',
  Ability = 'Ability',
}

export type Rating = {
  ratingType: RatingType;
  rating: number;
};
