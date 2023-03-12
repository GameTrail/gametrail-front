import type { NextApiRequest, NextApiResponse } from 'next';
import { MOCK_USER_GAME_LIST } from '@/models/GameList/mock';
import type { GameList } from '@/models/GameList/types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<GameList[]>,
) {
  res.status(200).json(MOCK_USER_GAME_LIST);
}
