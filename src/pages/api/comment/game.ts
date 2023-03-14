// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { MOCK_COMMENTS_GAME } from '@/models/Comment/mock';
import type { CommentsGame } from '@/models/Comment/types';

type ResData = {
  commentsGame: CommentsGame[]
};

type ReqData = {
  authToken: string,
  userId: number,
  gameId: number,
  text: string,
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResData>,
) {
  if (req.method === 'GET') {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { gameId } = req.body as ReqData;
  } else if (req.method === 'POST') {
    const {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      authToken, userId, gameId, text,
    } = req.body as ReqData;
  }

  res.status(200).json({ commentsGame: MOCK_COMMENTS_GAME });
}
