import type { GameList } from '../GameList/types';
import { GameListState } from '../GameList/types';
import { MOCK_GAME_TRAIL_LIST } from '../TrailList/mock';
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
    trailList: MOCK_GAME_TRAIL_LIST,
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
    trailList: MOCK_GAME_TRAIL_LIST,
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
    trailList: MOCK_GAME_TRAIL_LIST,
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
   {
    id: 6,
    name: 'The Legend of Zelda: Breath of the Wild',
    genre: 'Sandbox',
    platforms: [MOCK_PLATFORM],
    releaseDate: '2020',
    image: 'https://juegosfullparapc.com/wp-content/uploads/2017/04/zelda-breath-of-the-wild-caratula.jpg',
    photos: '',
    description: '',
    trailList: MOCK_GAME_TRAIL_LIST,
  },
  {
    id: 7,
    name: 'Call of Duty: Black Ops III',
    genre: 'Shooter',
    platforms: [MOCK_PLATFORM],
    releaseDate: '2016',
    image: 'https://2.bp.blogspot.com/-oIl5P53YY44/Vjuo_QMCbOI/AAAAAAAAKmI/-zbyGrHNspM/s1600/Call%2BOf%2BDuty%2BBlack%2BOps%2BIII%2BPC%2BCover%2BCaratula.jpg',
    photos: '',
    description: '',
    trailList: MOCK_GAME_TRAIL_LIST,
  },
  {
    id: 8,
    name: 'Grand Thef Auto: San Andreas',
    genre: 'Sandbox',
    platforms: [MOCK_PLATFORM],
    releaseDate: '2016',
    image: 'https://3.bp.blogspot.com/-L7xR7tHNIg8/XGWusdYWhyI/AAAAAAAAIvc/ryKkCx3ae0ovJOlFuZXaBq1kF2VeLpDRgCLcBGAs/s1600/gta%2Bsa.jpg',
    photos: '',
    description: '',
    trailList: MOCK_GAME_TRAIL_LIST,
  },
  {
    id: 9,
    name: 'Medal of Honor Airborne',
    genre: 'Shooter',
    platforms: [MOCK_PLATFORM],
    releaseDate: '2007',
    image: 'https://i.3djuegos.com/juegos/1299/medal_of_honor_airborne/fotos/ficha/medal_of_honor_airborne-1682758.jpg',
    photos: '',
    description: '',
    trailList: MOCK_GAME_TRAIL_LIST,
  },

];

export const MOCK_GAME: Game = {
  id: 4,
  name: 'Skate 3.',
  genre: 'Sports',
  platforms: [MOCK_PLATFORM],
  releaseDate: '11/05/2010',
  image: 'https://store-images.s-microsoft.com/image/apps.18720.68005754082254855.39795a60-73cf-4461-87d9-7f112c30c43c.46888afa-996b-4016-b5b4-c2e0b78171e2?q=90&w=177&h=265',
  photos: '',
  description: 'Haz equipo. Deslízate. La galardonada franquicia Skate regresa para conquistar el asfalto. Skate 3 te proporciona la experiencia cooperativa más emocionante del universo skate. Está en manos de los jugadores crear el mejor equipo y transformar la ciudad sobre cuatro ruedas. Prepárate para superar los retos más audaces, compite online contra las pandillas rivales y arrasa por las calles de Port Carverton, el paraíso de cualquier skater.',
  trailList: MOCK_GAME_TRAIL_LIST,
};
