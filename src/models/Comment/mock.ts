// eslint-disable-next-line import/no-cycle
import { MOCK_GAMES } from '../Game/mock';
import { MOCK_USERS } from '../User/mock';
import type { Comment } from './types';

export const MOCK_USER_COMMENTS: Comment[] = [
  {
    id: 1,
    text: 'Este juego es una pasada, ¡lo recomiendo!',
    commentedUser: MOCK_USERS[1],
    userWhoComments: MOCK_USERS[0],
    game: MOCK_GAMES[0],
  },
  {
    id: 2,
    text: 'La gente tiene este juego como su fuera una obra maestra, menudo tostón',
    commentedUser: MOCK_USERS[0],
    userWhoComments: MOCK_USERS[1],
    game: MOCK_GAMES[0],
  },
];
