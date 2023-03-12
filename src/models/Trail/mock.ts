import { MOCK_GAMES } from '../Game/mock';
import { MOCK_USERS } from '../User/mock';
import type { TrailGang } from './types';

export const MOCK_TRAIL_GANG: TrailGang = {
  id: 1,
  image: '/images/MGS.jpg',
  players: MOCK_USERS,
  games: MOCK_GAMES,
  startDate: '07/03/2023',
};
