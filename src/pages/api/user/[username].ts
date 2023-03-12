import type { NextApiRequest, NextApiResponse } from 'next';
import { MOCK_USER } from '@/models/User/mock';
import type { User } from '@/models/User/types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>,
) {
  res.status(200).json(MOCK_USER);
}
