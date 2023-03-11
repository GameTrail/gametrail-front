import type { User } from '../User/types';
import type { Comment } from './types';

export type CommentUser = Pick<User, 'id' | 'username' | 'profilePicture'>;

export const MOCK_USER_COMMENTS: Comment[] = [
  {
    id: 1,
    text: 'Este chaval sabe de lo que habla, es un crack',
    commentedUser: {
      id: 1,
      username: 'jvegax',
      profilePicture: 'https://img.lovepik.com/free-png/20211208/lovepik-male-avatar-silhouette-png-image_401422660_wh1200.png',
    },
    userWhoComments: {
      id: 2,
      username: 'LuisUsrDev',
      profilePicture: 'https://cdn.pixabay.com/photo/2017/12/25/22/52/tiger-3039280_1280.jpg',
    },
    game: {
      id: 1,
      name: 'Super Mario Bros.',
      genre: 'Platformer',
      platform: 'NES',
      release: '1985',
      image: 'https://upload.wikimedia.org/wikipedia/en/5/56/Super_Mario_Bros._box_art.png',
      comments: [],
    },
  },
  {
    id: 2,
    text: 'Nos pasamos el RD2 en 1 semana, no veas cómo corre el tío',
    commentedUser: {
      id: 1,
      username: 'jvegax',
      profilePicture: 'https://img.lovepik.com/free-png/20211208/lovepik-male-avatar-silhouette-png-image_401422660_wh1200.png',
    },
    userWhoComments: {
      id: 2,
      username: 'wolf223',
      profilePicture: 'https://cdn.pixabay.com/photo/2017/10/22/17/54/wolf-2878633_1280.jpg',
    },
    game: {
      id: 1,
      name: 'Super Mario Bros.',
      genre: 'Platformer',
      platform: 'NES',
      release: '1985',
      image: 'https://upload.wikimedia.org/wikipedia/en/5/56/Super_Mario_Bros._box_art.png',
      comments: [],
    },
  },
];

export const MOCK_GAME_COMMENTS: Comment[] = [
  {
    id: 1,
    text: 'Este juego es una pasada, ¡lo recomiendo!',
    commentedUser: {
      id: 1,
      username: 'jvegax',
      profilePicture: 'https://img.lovepik.com/free-png/20211208/lovepik-male-avatar-silhouette-png-image_401422660_wh1200.png',
    },
    userWhoComments: {
      id: 1,
      username: 'LuisUsrDev',
      profilePicture: 'https://img.lovepik.com/free-png/20211208/lovepik-male-avatar-silhouette-png-image_401422660_wh1200.png',
    },
    game: {
      id: 1,
      name: 'Super Mario Bros.',
      genre: 'Platformer',
      platform: 'NES',
      release: '1985',
      image: 'https://upload.wikimedia.org/wikipedia/en/5/56/Super_Mario_Bros._box_art.png',
      comments: [],
    },
  },
  {
    id: 2,
    text: 'La gente tiene este juego como su fuera una obra maestra, menudo tostón',
    commentedUser: {
      id: 1,
      username: 'LuisUsrDev',
      profilePicture: 'https://img.lovepik.com/free-png/20211208/lovepik-male-avatar-silhouette-png-image_401422660_wh1200.png',
    },
    userWhoComments: {
      id: 2,
      username: 'jvegax',
      profilePicture: 'https://img.lovepik.com/free-png/20211208/lovepik-male-avatar-silhouette-png-image_401422660_wh1200.png',
    },
    game: {
      id: 1,
      name: 'Super Mario Bros.',
      genre: 'Platformer',
      platform: 'NES',
      release: '1985',
      image: 'https://upload.wikimedia.org/wikipedia/en/5/56/Super_Mario_Bros._box_art.png',
      comments: [],
    },
  },
];
