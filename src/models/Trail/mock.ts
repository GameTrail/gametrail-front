import { MOCK_GAMES } from '../Game/mock';
import { MOCK_USERS } from '../User/mock';
import type { Trail, TrailGang } from './types';

export const MOCK_TRAIL: Trail = {
  id: 1,
  name: 'Rampas y Chill',
  description: 'Vamos a jugar a algunos juegos de skate, de tranquis y sin presiones. Gente agradable y que esté dispuesta a charlar un buen rato mientras hacemos unas rampitas',
  startDate: '2021/08/01',
  finishDate: '2021/08/01',
  maxPlayers: 4,
};

export const MOCK_TRAIL_GANG: TrailGang = {
  id: 1,
  image: '/images/MGS.jpg',
  players: MOCK_USERS,
  games: MOCK_GAMES,
  startDate: '07/03/2023',
};
