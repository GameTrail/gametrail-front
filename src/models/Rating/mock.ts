import type { Rating } from './type';
import { RatingType } from './type';

export const MOCK_USER_RATING: Rating[] = [
  {
    ratingType: RatingType.Kindness,
    rating: 5,
  },
  {
    ratingType: RatingType.Ability,
    rating: 2,
  },
  {
    ratingType: RatingType.Availability,
    rating: 3,
  },
  {
    ratingType: RatingType.Funny,
    rating: 4,
  },
  {
    ratingType: RatingType.Teamwork,
    rating: 3,
  },
];
