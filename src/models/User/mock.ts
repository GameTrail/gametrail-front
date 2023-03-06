import { MOCK_USER_GAME_LIST } from '../GameList/mock';
import { MOCK_USER_RATING } from '../Rating/mock';
import { MOCK_USER_TRAIL_LIST } from '../TrailList/mock';
import type { UserDetails } from './types';

export const MOCK_USER_DETAILS: UserDetails = {
  id: 1,
  username: 'jvegax',
  avatar: 'https://i.imgur.com/8K8VxHH.png',
  rating: MOCK_USER_RATING,
  gameList: MOCK_USER_GAME_LIST,
  trailList: MOCK_USER_TRAIL_LIST,
};
