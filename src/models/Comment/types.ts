import type { Game } from '../Game/types';
import type { CommentUser } from './mock';

export type Comment = {
  id: number,
  text: string,
  commentedUser: CommentUser,
  userWhoComments: CommentUser,
  game: Game
};
