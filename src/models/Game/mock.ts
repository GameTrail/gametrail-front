import type { GameList } from '../GameList/types';
import { GameListState } from '../GameList/types';
import { MOCK_GAME_TRAIL_LIST } from '../TrailList/mock';
import type { Game } from './types';

export const MOCK_GAMES: Game[] = [
  {
    id: 1,
    name: 'Super Mario Bros 3',
    genre: 'Platformer',
    platforms: ['NES'],
    releaseDate: '1985',
    image: 'https://www.empireposter.de/bilder/bilder_l/544070.jpg',
    photos: '',
    description: '',
    trailList: MOCK_GAME_TRAIL_LIST,
  },
  {
    id: 2,
    name: 'Call of Duty: Black Ops II',
    genre: 'Shooter',
    platforms: ['PS3, XBOX 360'],
    releaseDate: '2012',
    image: 'https://www.empireposter.de/bilder/bilder_l/544070.jpg',
    photos: '',
    description: '',
    trailList: MOCK_GAME_TRAIL_LIST,
  },
  {
    id: 3,
    name: 'Grand Thef Auto V',
    genre: 'Sandbox',
    platforms: ['PS3, PS4,XBOX 360, XBOX ONE'],
    releaseDate: '2016',
    image: 'https://www.empireposter.de/bilder/bilder_l/544070.jpg',
    photos: '',
    description: '',
    trailList: MOCK_GAME_TRAIL_LIST,
  },
  {
    id: 5,
    name: 'Inazuma Eleven II: Ventisca Eterna',
    genre: 'Sports',
    platforms: ['Nintendo DS'],
    releaseDate: '2010',
    image: 'https://www.empireposter.de/bilder/bilder_l/544070.jpg',
    photos: '',
    description: '',
    trailList: MOCK_GAME_TRAIL_LIST,
  },
];

export const MOCK_TRAIL_GAMES: GameList[] = [
  {
    id: 1,
    name: 'Super Mario Bros 3',
    state: GameListState.PENDING,
    image: 'https://www.empireposter.de/bilder/bilder_l/544070.jpg',
    lastModified: '2021-08-01',
  },
  {
    id: 2,
    name: 'Super Mario Bros 3',
    state: GameListState.FINISHED,
    image: 'https://www.empireposter.de/bilder/bilder_l/544070.jpg',
    lastModified: '2021-08-01',
  },
  {
    id: 3,
    name: 'Super Mario Bros 3',
    state: GameListState.FINISHED,
    image: 'https://www.empireposter.de/bilder/bilder_l/544070.jpg',
    lastModified: '2021-08-01',
  },
  {
    id: 3,
    name: 'Super Mario Bros 3',
    state: GameListState.FINISHED,
    image: 'https://www.empireposter.de/bilder/bilder_l/544070.jpg',
    lastModified: '2021-08-01',
  },
  {
    id: 4,
    name: 'Super Mario Bros 3',
    state: GameListState.FINISHED,
    image: 'https://www.empireposter.de/bilder/bilder_l/544070.jpg',
    lastModified: '2021-08-01',
  },

];

export const MOCK_GAME: Game = {
  id: 4,
  name: 'Skate 3.',
  genre: 'Sports',
  platforms: ['PlayStation 3', 'Xbox 360', 'XCG', 'Nintendo'],
  releaseDate: '11/05/2010',
  image: 'https://store-images.s-microsoft.com/image/apps.18720.68005754082254855.39795a60-73cf-4461-87d9-7f112c30c43c.46888afa-996b-4016-b5b4-c2e0b78171e2?q=90&w=177&h=265',
  photos: '',
  description: 'Haz equipo. Deslízate. La galardonada franquicia Skate regresa para conquistar el asfalto. Skate 3 te proporciona la experiencia cooperativa más emocionante del universo skate. Está en manos de los jugadores crear el mejor equipo y transformar la ciudad sobre cuatro ruedas. Prepárate para superar los retos más audaces, compite online contra las pandillas rivales y arrasa por las calles de Port Carverton, el paraíso de cualquier skater.',
  trailList: MOCK_GAME_TRAIL_LIST,
};
