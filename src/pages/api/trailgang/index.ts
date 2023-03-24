import type { NextApiRequest, NextApiResponse } from 'next';
import { MOCK_TRAIL } from '@/models/Trail/mock';
import type { Trail } from '@/models/Trail/types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Trail>,
) {
  res.status(200).json(MOCK_TRAIL);
}
