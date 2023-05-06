import type { NextApiRequest, NextApiResponse } from 'next';
import type { BlogItem } from '@/models/Blog/mock';
import { MOCK_BLOGS } from '@/models/Blog/mock';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<BlogItem[]>,
) {
  res.status(200).json(MOCK_BLOGS);
}
