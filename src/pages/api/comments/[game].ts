import type { NextApiRequest, NextApiResponse } from 'next';
import { MOCK_USER_COMMENTS } from '@/models/Comment/mock';
import type { Comments } from '@/models/Comment/types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Comments[]>,
) {
  res.status(200).json(MOCK_USER_COMMENTS);
}
