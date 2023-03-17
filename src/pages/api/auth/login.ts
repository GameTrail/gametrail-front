import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.status(200).json({
    token: 'a460bb32ed776deb7ea18c25a0fba21e8fe5ea60',
    id: 1,
  });
}
