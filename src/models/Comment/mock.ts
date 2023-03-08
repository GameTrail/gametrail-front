import { MOCK_GAMES } from '../Game/mock';
import { MOCK_USER_GAME_LIST } from '../GameList/mock';
import { GameListState } from '../GameList/types';
import { MOCK_USER_RATING } from '../Rating/mock';
import { RatingType } from '../Rating/types';
import { Plan } from '../User/types';
import type { Comment } from './types';

export const MOCK_USER_COMMENTS: Comment[] = [
  {
    id: 1,
    text: 'Este juego es una pasada, ¡lo recomiendo!',
    commentedUser: {
      id: 1,
      username: 'LuisUsrDev',
      email: 'luisUsrDev@gmail.com',
      avatar: 'https://img.lovepik.com/free-png/20211208/lovepik-male-avatar-silhouette-png-image_401422660_wh1200.png',
      rating: MOCK_USER_RATING,
      gameList: MOCK_USER_GAME_LIST,
      plan: Plan.Premium,
    },
    userWhoComments: {
      id: 1,
      username: 'LuisUsrDev',
      email: 'luisUsrDev@gmail.com',
      avatar: 'https://img.lovepik.com/free-png/20211208/lovepik-male-avatar-silhouette-png-image_401422660_wh1200.png',
      rating: [
        {
          ratingType: RatingType.Kindness,
          rating: 5,

        },
        {
          ratingType: RatingType.Ability,
          rating: 2,
        },
        {
          ratingType: RatingType.Availability,
          rating: 3,
        },
        {
          ratingType: RatingType.Funny,
          rating: 4,
        },
        {
          ratingType: RatingType.Teamwork,
          rating: 3,
        },
      ],

      gameList: [
        {
          id: 1,
          name: 'My Favorite Games',
          image: 'https://upload.wikimedia.org/wikipedia/en/5/56/Super_Mario_Bros._box_art.png',
          lastModified: '2021-08-01',
          state: GameListState.FINISHED,
        },
        {
          id: 2,
          name: 'My Favorite Games',
          image: 'https://upload.wikimedia.org/wikipedia/en/5/56/Super_Mario_Bros._box_art.png',
          lastModified: '2021-08-01',
          state: GameListState.PENDING,
        },
        {
          id: 3,
          name: 'My Favorite Games',
          image: 'https://upload.wikimedia.org/wikipedia/en/5/56/Super_Mario_Bros._box_art.png',
          lastModified: '2021-08-01',
          state: GameListState.PENDING,
        },
      ],
      plan: Plan.Premium,
    },
    game: {
      id: 1,
      name: 'Super Mario Bros.',
      genre: 'Platformer',
      platform: 'NES',
      release: '1985',
      image: 'https://upload.wikimedia.org/wikipedia/en/5/56/Super_Mario_Bros._box_art.png',
    },
  },
  {
    id: 2,
    text: 'La gente tiene este juego como su fuera una obra maestra, menudo tostón',
    commentedUser: {
      id: 1,
      username: 'LuisUsrDev',
      email: 'luisUsrDev@gmail.com',
      avatar: 'https://img.lovepik.com/free-png/20211208/lovepik-male-avatar-silhouette-png-image_401422660_wh1200.png',
      rating: [
        {
          ratingType: RatingType.Kindness,
          rating: 5,

        },
        {
          ratingType: RatingType.Ability,
          rating: 2,
        },
        {
          ratingType: RatingType.Availability,
          rating: 3,
        },
        {
          ratingType: RatingType.Funny,
          rating: 4,
        },
        {
          ratingType: RatingType.Teamwork,
          rating: 3,
        },
      ],

      gameList: [
        {
          id: 1,
          name: 'My Favorite Games',
          image: 'https://upload.wikimedia.org/wikipedia/en/5/56/Super_Mario_Bros._box_art.png',
          lastModified: '2021-08-01',
          state: GameListState.FINISHED,
        },
        {
          id: 2,
          name: 'My Favorite Games',
          image: 'https://upload.wikimedia.org/wikipedia/en/5/56/Super_Mario_Bros._box_art.png',
          lastModified: '2021-08-01',
          state: GameListState.PENDING,
        },
        {
          id: 3,
          name: 'My Favorite Games',
          image: 'https://upload.wikimedia.org/wikipedia/en/5/56/Super_Mario_Bros._box_art.png',
          lastModified: '2021-08-01',
          state: GameListState.PENDING,
        },
      ],
      plan: Plan.Premium,
    },
    userWhoComments: {
      id: 1,
      username: 'LuisUsrDev',
      email: 'luisUsrDev@gmail.com',
      avatar: 'https://img.lovepik.com/free-png/20211208/lovepik-male-avatar-silhouette-png-image_401422660_wh1200.png',
      rating: [
        {
          ratingType: RatingType.Kindness,
          rating: 5,

        },
        {
          ratingType: RatingType.Ability,
          rating: 2,
        },
        {
          ratingType: RatingType.Availability,
          rating: 3,
        },
        {
          ratingType: RatingType.Funny,
          rating: 4,
        },
        {
          ratingType: RatingType.Teamwork,
          rating: 3,
        },
      ],

      gameList: [
        {
          id: 1,
          name: 'My Favorite Games',
          image: 'https://upload.wikimedia.org/wikipedia/en/5/56/Super_Mario_Bros._box_art.png',
          lastModified: '2021-08-01',
          state: GameListState.FINISHED,
        },
        {
          id: 2,
          name: 'My Favorite Games',
          image: 'https://upload.wikimedia.org/wikipedia/en/5/56/Super_Mario_Bros._box_art.png',
          lastModified: '2021-08-01',
          state: GameListState.PENDING,
        },
        {
          id: 3,
          name: 'My Favorite Games',
          image: 'https://upload.wikimedia.org/wikipedia/en/5/56/Super_Mario_Bros._box_art.png',
          lastModified: '2021-08-01',
          state: GameListState.PENDING,
        },
      ],
      plan: Plan.Premium,
    },
    game: {
      id: 1,
      name: 'Super Mario Bros.',
      genre: 'Platformer',
      platform: 'NES',
      release: '1985',
      image: 'https://upload.wikimedia.org/wikipedia/en/5/56/Super_Mario_Bros._box_art.png',
    },
  },
];
