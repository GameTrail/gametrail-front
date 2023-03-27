import type { RatingNull } from './types';
import { RatingType } from './types';

export const MOCK_USER_RATING: RatingNull[] = [
  {
    type: RatingType.KINDNESS,
    rating: '?',
    ratedUser: 'MOCK_USERS[0]',
    userWhoRate: 'MOCK_USERS[1]',

  },
  {
    type: RatingType.ABILITY,
    rating: '?',
    ratedUser: 'MOCK_USERS[1]',
    userWhoRate: 'MOCK_USERS[0]',
  },
  {
    type: RatingType.AVAILABILITY,
    rating: '?',
    ratedUser: 'MOCK_USERS[0]',
    userWhoRate: 'MOCK_USERS[1]',
  },
  {
    type: RatingType.FUNNY,
    rating: '?',
    ratedUser: 'MOCK_USERS[0]',
    userWhoRate: 'MOCK_USERS[1]',
  },
  {
    type: RatingType.TEAMWORK,
    rating: '?',
    ratedUser: 'MOCK_USERS[1]',
    userWhoRate: 'MOCK_USERS[0]',
  },
];
