import { MOCK_GAMES } from '../Game/mock';
import { MOCK_USERS } from '../User/mock';
import type { TrailGang } from './types';

export const MOCK_TRAIL_GANG: TrailGang = {
  id: 1,
  image: 'lotties/Home/AtomicHeart.json',
  players: MOCK_USERS,
  games: MOCK_GAMES,
  startDate: '10/10/2010',
};
