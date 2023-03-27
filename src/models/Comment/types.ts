import type { CommentUser } from './mock';

export type Comment = {
  id: number | null,
  commentText: string | null,
  userWhoComments: CommentUser | null,
};

export type CommentsGame = Comment & { game: number | null };
export type CommentsUser = Comment & { commentedUser: CommentUser | null };
