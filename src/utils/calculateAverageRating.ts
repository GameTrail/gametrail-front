import type { Rating } from '@/models/Rating/types';

export function calculateAverageRating(userRating: Rating): number {
  if (!userRating) return -1;
  const {
    ability, availability, funny, kindness, teamwork,
  } = userRating;

  const average = (ability + availability + funny + kindness + teamwork) / 5;
  return average;
}
