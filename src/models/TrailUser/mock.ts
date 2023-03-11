import type { TrailUser } from '@/models/TrailUser/types';
import { MOCK_USER_DETAILS } from '@/models/User/mock';

export const MOCK_TRAIL_USER: TrailUser[] = [
  {
    id: 1,
    trail: 1,
    user: MOCK_USER_DETAILS[0],
    owner: true,
  },
  {
    id: 2,
    trail: 1,
    user: MOCK_USER_DETAILS[1],
    owner: false,
  },
  {
    id: 3,
    trail: 2,
    user: MOCK_USER_DETAILS[2],
    owner: false,
  },
];
