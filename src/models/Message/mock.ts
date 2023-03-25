import { MOCK_TRAIL } from '../Trail/mock';
import { MOCK_USER, MOCK_USERS } from '../User/mock';
import type { Message } from './types';

export const MOCK_MESSAGES_TRAIL: Message[] = [
  {
    id: 1,
    text: 'Pa cuando una partidilla?',
    creationDate: '14/04/2023',
    user: {
      id: MOCK_USER.id,
      username: MOCK_USER.username,
      avatar: MOCK_USERS[0].avatar,
    },
    trail: MOCK_TRAIL,
  },
  {
    id: 2,
    text: 'Nadie se apunta?',
    creationDate: '14/04/2023',
    user: {
      id: MOCK_USER.id,
      username: MOCK_USER.username,
      avatar: MOCK_USERS[0].avatar,
    },
    trail: MOCK_TRAIL,
  },
  {
    id: 3,
    text: 'F',
    creationDate: '14/04/2023',
    user: {
      id: MOCK_USER.id,
      username: MOCK_USER.username,
      avatar: MOCK_USERS[0].avatar,
    },
    trail: MOCK_TRAIL,
  },
];
