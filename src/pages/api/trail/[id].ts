import type { NextApiRequest, NextApiResponse } from 'next';
import { MOCK_TRAIL, MOCK_TRAIL2 } from '@/models/Trail/mock';
import type { Trail } from '@/models/Trail/types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Trail>,
) {
  const mock = req.query.id === '1' ? MOCK_TRAIL : MOCK_TRAIL2;
  res.status(200).json(mock);
}
