import type { CommentUser } from './mock';

export type Comment = {
  id: number,
  text: string,
  userWhoComments: CommentUser,
};

export type CommentsGame = Comment & { gameId: number };
export type CommentsUser = Comment & { commentedUser: CommentUser };
