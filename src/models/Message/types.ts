import type { Trail } from '../Trail/types';
import type { User } from '../User/types';

export type MessageUser = Pick<User, 'id' | 'username' | 'profilePicture'>;

export type Message = {
  id: number,
  text: string,
  creationDate: string,
  user: MessageUser,
  trail: Trail
};
