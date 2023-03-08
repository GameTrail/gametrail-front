import { GameListState } from '../GameList/types';
import { RatingType } from '../Rating/types';
import { Plan } from './types';
import type { User } from './types';

export const MOCK_USERS: User[] = [
  {
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
  {
    id: 2,
    username: 'jvegax',
    email: 'jvegax@gmail.com',
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
];

export const MOCK_USER: User = {
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
};
