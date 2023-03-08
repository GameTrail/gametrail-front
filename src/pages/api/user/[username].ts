import type { NextApiRequest, NextApiResponse } from 'next';
import { MOCK_USERS } from '@/models/User/mock';
import type { User } from '@/models/User/types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>,
) {
  const result = MOCK_USERS.find(user => {return user.username === req.query.username})
  res.status(200).json(result?? MOCK_USERS[1]);
}
