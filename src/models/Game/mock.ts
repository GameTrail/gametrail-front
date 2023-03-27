import type { GameList } from '../GameList/types';
import { GameListState } from '../GameList/types';
import type { Game, Platform } from './types';

export const MOCK_PLATFORM: Platform = {
  platform: 'NES',
};

export const MOCK_GAMES: Game[] = [
  {
    id: 1,
    name: 'Super Mario Bros 3',
    genre: 'Platformer',
    platforms: [MOCK_PLATFORM],
    releaseDate: '1985',
    image: 'https://www.empireposter.de/bilder/bilder_l/544070.jpg',
    photos: '',
    description: '',
    comments_game: [],
  },
  {
    id: 2,
    name: 'Call of Duty: Black Ops II',
    genre: 'Shooter',
    platforms: [MOCK_PLATFORM],
    releaseDate: '2012',
    image: 'https://www.empireposter.de/bilder/bilder_l/544070.jpg',
    photos: '',
    description: '',
    comments_game: [],
  },
  {
    id: 3,
    name: 'Grand Thef Auto V',
    genre: 'Sandbox',
    platforms: [MOCK_PLATFORM],
    releaseDate: '2016',
    image: 'https://www.empireposter.de/bilder/bilder_l/544070.jpg',
    photos: '',
    description: '',
    comments_game: [],
  },
  {
    id: 5,
    name: 'Inazuma Eleven II: Ventisca Eterna',
    genre: 'Sports',
    platforms: [MOCK_PLATFORM],
    releaseDate: '2010',
    image: 'https://www.empireposter.de/bilder/bilder_l/544070.jpg',
    photos: '',
    description: '',
    comments_game: [],
  },
];
export const MOCK_TRAIL_GAMES: GameList[] = [
  {
    id: 1,
    status: GameListState.PENDING,
    creationMoment: '2021-08-01',
    lastModified: '2021-08-01',
    game: MOCK_GAMES[0],
    gameList: 1,
  },
  {
    id: 2,
    status: GameListState.FINISHED,
    creationMoment: '2021-08-01',
    lastModified: '2021-08-01',
    game: MOCK_GAMES[1],
    gameList: 1,
  },
  {
    id: 3,
    status: GameListState.FINISHED,
    creationMoment: '2021-08-01',
    lastModified: '2021-08-01',
    game: MOCK_GAMES[1],
    gameList: 1,
  },
  {
    id: 3,
    status: GameListState.FINISHED,
    creationMoment: '2021-08-01',
    lastModified: '2021-08-01',
    game: MOCK_GAMES[1],
    gameList: 1,
  },
  {
    id: 4,
    status: GameListState.FINISHED,
    creationMoment: '2021-08-01',
    lastModified: '2021-08-01',
    game: MOCK_GAMES[1],
    gameList: 1,
  },

];
