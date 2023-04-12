import type { Rating } from '@/models/Rating/types';
import { isRatingEmpty } from './isRatingEmpty';

export const normalizeUserRating = (userRating: any): Rating => {
  if (isRatingEmpty(userRating)) return null;

  return {
    kindness: userRating.KINDNESS,
    ability: userRating.ABILITY,
    availability: userRating.AVAILABILITY,
    funny: userRating.FUNNY,
    teamwork: userRating.TEAMWORK,
  };
};
