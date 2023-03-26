import type { NextApiRequest, NextApiResponse } from 'next';
import type { Trail } from '@/models/Trail/types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Trail>,
) {
  res.status(200).json({
    id: 1,
    name: 'Rampas y Chill',
    description: 'Vamos a jugar a algunos juegos de skate, de tranquis y sin presiones. Gente agradable y que esté dispuesta a charlar un buen rato mientras hacemos unas rampitas',
    startDate: '2021/08/01',
    finishDate: '2021/08/09',
    maxPlayers: 4,
    owner: {
      id: 0,
      username: '',
      email: '',
      auth_token: '',
      avatar: '',
      plan: '',
      games: [],
      trails: [],
      rate_recieved: [],
      comments_received: [],
    },
    games: [],
    users: [],
    platforms: [],
  });
}
