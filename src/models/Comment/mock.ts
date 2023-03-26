// import type { User } from '../User/types';
import type { CommentsGame, CommentsUser } from './types';

// export type CommentUser = Pick<User, 'id' | 'username' | 'avatar'>;
export type CommentUser = {
  id: number | null;
  username: string | null;
  avatar: string | null;
};

export const MOCK_COMMENTS_USER: CommentsUser[] = [
  {
    id: 1,
    text: 'Este chaval sabe de lo que habla, es un crack',
    userWhoComments: {
      id: 2,
      username: 'LuisUsrDev',
      avatar: 'https://cdn.pixabay.com/photo/2017/12/25/22/52/tiger-3039280_1280.jpg',
    },
    commentedUser: {
      id: 1,
      username: 'jvegax',
      avatar: 'https://cdn.pixabay.com/photo/2017/10/22/17/54/wolf-2878633_1280.jpg',
    },
  },
  {
    id: 2,
    text: 'Nos pasamos el RD2 en 1 semana, no veas cómo corre el tío',
    userWhoComments: {
      id: 2,
      username: 'wolf223',
      avatar: 'https://cdn.pixabay.com/photo/2017/10/22/17/54/wolf-2878633_1280.jpg',
    },
    commentedUser: {
      id: 1,
      username: 'jvegax',
      avatar: 'https://cdn.pixabay.com/photo/2017/10/22/17/54/wolf-2878633_1280.jpg',
    },
  },
];

export const MOCK_COMMENTS_GAME: CommentsGame[] = [
  {
    id: 1,
    text: 'Este juego es una pasada, ¡lo recomiendo!',
    gameId: 1,
    userWhoComments: {
      id: 1,
      username: 'LuisUsrDev',
      avatar: 'https://cdn.pixabay.com/photo/2017/12/25/22/52/tiger-3039280_1280.jpg',
    },
  },
  {
    id: 2,
    text: 'La gente tiene este juego como si fuera una obra maestra, menudo tostón',
    gameId: 1,
    userWhoComments: {
      id: 2,
      username: 'wolf223',
      avatar: 'https://cdn.pixabay.com/photo/2017/10/22/17/54/wolf-2878633_1280.jpg',
    },
  },
];
