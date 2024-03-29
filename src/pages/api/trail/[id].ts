import type { NextApiRequest, NextApiResponse } from 'next';
import type { Trail } from '@/models/Trail/types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Trail>,
) {
  res.status(200).json({
    id: 1,
    name: 'Super Mario Bros.',
    description: '1985-09-13',
    startDate: '',
    finishDate: '',
    maxPlayers: 0,
    owner: {
      id: 0,
      username: '',
      email: '',
      auth_token: '',
      avatar: '',
      plan: '',
      games: [],
      trails: [],
      average_ratings: {
        ability: 0,
        availability: 0,
        funny: 0,
        kindness: 0,
        teamwork: 0,
      },
      comments_received: [],
    },
    games: [],
    users: [],
    platforms: [],
  });
}
