import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.status(200).json({
    token: '0835f889272adb3aceb051bf399cc31406c291a4',
    id: 7,
  });
}
