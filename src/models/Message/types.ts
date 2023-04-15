import type { Trail } from '../Trail/types';

type MessageUser = {
  id: number | undefined,
  username: string | undefined,
  avatar: string | undefined
};

export type Message = {
  id: number,
  text: string,
  creationDate: string,
  user: MessageUser,
  trail: Trail
};
