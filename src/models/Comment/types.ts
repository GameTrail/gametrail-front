import type { CommentUser } from './mock';

export type Comment = {
  id: number | null,
  text: string | null,
  userWhoComments: CommentUser | null,
};

export type CommentsGame = Comment & { gameId: number | null };
export type CommentsUser = Comment & { commentedUser: CommentUser | null };
