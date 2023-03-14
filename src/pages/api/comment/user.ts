// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { MOCK_COMMENTS_USER } from '@/models/Comment/mock';
import type { CommentsUser } from '@/models/Comment/types';

type ResData = {
  commentsUser: CommentsUser[],
};

type ReqData = {
  authToken: string,
  userId: number,
  commentedUserId: number,
  text: string,
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResData>,
) {
  if (req.method === 'GET') {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { commentedUserId } = req.body as ReqData;
  } else if (req.method === 'POST') {
    const {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      authToken, userId, commentedUserId, text,
    } = req.body as ReqData;
  }

  res.status(200).json({ commentsUser: MOCK_COMMENTS_USER });
}
