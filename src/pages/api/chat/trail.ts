// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { MOCK_MESSAGES_TRAIL } from '@/models/Message/mock';
import type { Message } from '@/models/Message/types';

type ResData = {
  messagesTrail: Message[],
};

type ReqData = {
  authToken: string,
  userId: number,
  trailId: number,
  text: string,
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResData>,
) {
  if (req.method === 'GET') {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { trailId } = req.body as ReqData;
  } else if (req.method === 'POST') {
    const {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      authToken, userId, trailId, text,
    } = req.body as ReqData;
  }

  res.status(200).json({ messagesTrail: MOCK_MESSAGES_TRAIL });
}
