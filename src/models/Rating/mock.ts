import { MOCK_USERS } from '../User/mock';
import type { Rating } from './types';
import { RatingType } from './types';

export const MOCK_USER_RATING: Rating[] = [
  {
    ratingType: RatingType.Kindness,
    rating: 5,
    ratedUser: 'MOCK_USERS[0]',
    userWhoRates: 'MOCK_USERS[1]',

  },
  {
    ratingType: RatingType.Ability,
    rating: 2,
    ratedUser: 'MOCK_USERS[1]',
    userWhoRates: 'MOCK_USERS[0]',
  },
  {
    ratingType: RatingType.Availability,
    rating: 3,
    ratedUser: 'MOCK_USERS[0]',
    userWhoRates: 'MOCK_USERS[1]',
  },
  {
    ratingType: RatingType.Funny,
    rating: 4,
    ratedUser: 'MOCK_USERS[0]',
    userWhoRates: 'MOCK_USERS[1]',
  },
  {
    ratingType: RatingType.Teamwork,
    rating: 3,
    ratedUser: 'MOCK_USERS[1]',
    userWhoRates: 'MOCK_USERS[0]',
  },
];
