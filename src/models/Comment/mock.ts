import { MOCK_GAME_TRAIL_LIST } from '../TrailList/mock';
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
      platforms: ['NES'],
      releaseDate: '1985',
      image: 'https://upload.wikimedia.org/wikipedia/en/5/56/Super_Mario_Bros._box_art.png',
      photos: [],
      description: '',
      trailList: MOCK_GAME_TRAIL_LIST,
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
      platforms: ['NES'],
      releaseDate: '1985',
      image: 'https://upload.wikimedia.org/wikipedia/en/5/56/Super_Mario_Bros._box_art.png',
      photos: [],
      description: '',
      trailList: MOCK_GAME_TRAIL_LIST,
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
      profilePicture: 'https://cdn.pixabay.com/photo/2017/12/25/22/52/tiger-3039280_1280.jpg',
    },
    game: {
      id: 4,
      name: 'Skate 3.',
      genre: 'Sports',
      platforms: ['PlayStation 3', 'Xbox 360', 'XCG', 'Nintendo'],
      releaseDate: '11/05/2010',
      image: 'https://store-images.s-microsoft.com/image/apps.18720.68005754082254855.39795a60-73cf-4461-87d9-7f112c30c43c.46888afa-996b-4016-b5b4-c2e0b78171e2?q=90&w=177&h=265',
      photos: ['https://store-images.s-microsoft.com/image/apps.1164.68005754082254855.39795a60-73cf-4461-87d9-7f112c30c43c.93d3662b-92b9-44b9-9eb1-44299a73b730?q=90&w=320&h=180', 'https://store-images.s-microsoft.com/image/apps.47296.68005754082254855.39795a60-73cf-4461-87d9-7f112c30c43c.1da38618-63a3-4a08-9091-2d740315ef63?q=90&w=320&h=180',
        'https://store-images.s-microsoft.com/image/apps.47296.68005754082254855.39795a60-73cf-4461-87d9-7f112c30c43c.1da38618-63a3-4a08-9091-2d740315ef63?q=90&w=320&h=180', 'https://store-images.s-microsoft.com/image/apps.54187.68005754082254855.39795a60-73cf-4461-87d9-7f112c30c43c.7999385b-9977-4730-9f87-ebcb0a976292?q=90&w=320&h=180',
        'https://store-images.s-microsoft.com/image/apps.50010.68005754082254855.39795a60-73cf-4461-87d9-7f112c30c43c.94d3d89a-c6c2-4f2b-ba95-97347460480e?q=90&w=320&h=180'],
      description: 'Haz equipo. Deslízate. La galardonada franquicia Skate regresa para conquistar el asfalto. Skate 3 te proporciona la experiencia cooperativa más emocionante del universo skate. Está en manos de los jugadores crear el mejor equipo y transformar la ciudad sobre cuatro ruedas. Prepárate para superar los retos más audaces, compite online contra las pandillas rivales y arrasa por las calles de Port Carverton, el paraíso de cualquier skater.',
      trailList: MOCK_GAME_TRAIL_LIST,
      comments: [],
    },
  },
  {
    id: 2,
    text: 'La gente tiene este juego como si fuera una obra maestra, menudo tostón',
    commentedUser: {
      id: 1,
      username: 'LuisUsrDev',
      profilePicture: 'https://img.lovepik.com/free-png/20211208/lovepik-male-avatar-silhouette-png-image_401422660_wh1200.png',
    },
    userWhoComments: {
      id: 2,
      username: 'wolf223',
      profilePicture: 'https://cdn.pixabay.com/photo/2017/10/22/17/54/wolf-2878633_1280.jpg',
    },
    game: {
      id: 4,
      name: 'Skate 3.',
      genre: 'Sports',
      platforms: ['PlayStation 3', 'Xbox 360', 'XCG', 'Nintendo'],
      releaseDate: '11/05/2010',
      image: 'https://store-images.s-microsoft.com/image/apps.18720.68005754082254855.39795a60-73cf-4461-87d9-7f112c30c43c.46888afa-996b-4016-b5b4-c2e0b78171e2?q=90&w=177&h=265',
      photos: ['https://store-images.s-microsoft.com/image/apps.1164.68005754082254855.39795a60-73cf-4461-87d9-7f112c30c43c.93d3662b-92b9-44b9-9eb1-44299a73b730?q=90&w=320&h=180', 'https://store-images.s-microsoft.com/image/apps.47296.68005754082254855.39795a60-73cf-4461-87d9-7f112c30c43c.1da38618-63a3-4a08-9091-2d740315ef63?q=90&w=320&h=180',
        'https://store-images.s-microsoft.com/image/apps.47296.68005754082254855.39795a60-73cf-4461-87d9-7f112c30c43c.1da38618-63a3-4a08-9091-2d740315ef63?q=90&w=320&h=180', 'https://store-images.s-microsoft.com/image/apps.54187.68005754082254855.39795a60-73cf-4461-87d9-7f112c30c43c.7999385b-9977-4730-9f87-ebcb0a976292?q=90&w=320&h=180',
        'https://store-images.s-microsoft.com/image/apps.50010.68005754082254855.39795a60-73cf-4461-87d9-7f112c30c43c.94d3d89a-c6c2-4f2b-ba95-97347460480e?q=90&w=320&h=180'],
      description: 'Haz equipo. Deslízate. La galardonada franquicia Skate regresa para conquistar el asfalto. Skate 3 te proporciona la experiencia cooperativa más emocionante del universo skate. Está en manos de los jugadores crear el mejor equipo y transformar la ciudad sobre cuatro ruedas. Prepárate para superar los retos más audaces, compite online contra las pandillas rivales y arrasa por las calles de Port Carverton, el paraíso de cualquier skater.',
      trailList: MOCK_GAME_TRAIL_LIST,
      comments: [],
    },
  },
];
