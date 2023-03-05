import type { NextApiRequest, NextApiResponse } from 'next';
import { MOCK_USER_DETAILS } from '@/models/User/mock';
import type { UserDetails } from '@/models/User/types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserDetails>,
) {
  res.status(200).json(MOCK_USER_DETAILS);
}
