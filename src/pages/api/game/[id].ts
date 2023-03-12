import type { NextApiRequest, NextApiResponse } from 'next';
import { MOCK_GAME } from '@/models/Game/mock';
import type { Game } from '@/models/Game/types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Game>,
) {
  res.status(200).json(MOCK_GAME);
}
