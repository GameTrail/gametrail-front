import type { NextApiRequest, NextApiResponse } from 'next';
import { MOCK_TRAIL_GANG } from '@/models/Trail/mock';
import type { TrailGang } from '@/models/Trail/types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TrailGang>,
) {
  res.status(200).json(MOCK_TRAIL_GANG);
}
