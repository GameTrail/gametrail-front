import type { Game } from '../Game/types';
import type { User } from '../User/types';

export type Comment = {
  id: number,
  text: string,
  commentedUser: User,
  userWhoComments: User,
  game: Game
};
