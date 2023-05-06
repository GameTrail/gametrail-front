import type { NextApiRequest, NextApiResponse } from 'next';
import type { BlogItem } from '@/models/Blog/mock';
import { MOCK_BLOGS } from '@/models/Blog/mock';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<BlogItem | { message: string }>,
) {
  const blogItem = MOCK_BLOGS.find((blog) => blog.id === req.query.id);
  if (blogItem) {
    res.status(200).json(blogItem);
  } else {
    res.status(404).json({
      message: `Blog with id ${req.query.id} not found`,
    });
  }
}
