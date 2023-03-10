import type { NextApiRequest, NextApiResponse } from 'next';
import { MOCK_TRAIL_USER } from '@/models/TrailUser/mock';
import type { TrailUser } from '@/models/TrailUser/types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TrailUser>,
) {
  res.status(200).json(MOCK_TRAIL_USER);
}
