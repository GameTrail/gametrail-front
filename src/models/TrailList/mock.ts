import type { User } from '../User/types';
import type { TrailList } from './types';

export const MOCK_OWNER: User = {
  id: 0,
  username: '',
  auth_token: '',
  avatar: '',
  rating: [],
  gameList: [],
  trailList: [],
};
export const MOCK_GAME_TRAIL_LIST: TrailList[] = [
  {
    id: 1,
    name: 'Rampas & Chill',
    description: 'De Chill',
    startDate: '2023-03-12',
    endDate: '2023-03-13',
    maxPlayers: 5,
    owner: MOCK_OWNER,
  },
  {
    id: 2,
    name: 'Puente de Nostalgia',
    description: 'Vamos a jugar algunos de los juegos más míticos',
    startDate: '2023-03-01',
    endDate: '2023-04-01',
    maxPlayers: 4,
    owner: MOCK_OWNER,
  },

];
export const MOCK_USER_TRAIL_LIST: TrailList[] = [
  {
    id: 1,
    name: 'Saga souls',
    description: 'My favorite trails in the world',
    startDate: '2023-03-06',
    endDate: '2023-04-06',
    maxPlayers: 5,
    owner: MOCK_OWNER,
  },
  {
    id: 2,
    name: 'JRPG master',
    description: 'My favorite trails in the world',
    startDate: '2021-08-01',
    endDate: '2021-08-01',
    maxPlayers: 4,
    owner: MOCK_OWNER,
  },
  {
    id: 3,
    name: 'JRPG master',
    description: 'My favorite trails in the world',
    startDate: '2021-08-01',
    endDate: '2021-08-01',
    maxPlayers: 4,
    owner: MOCK_OWNER,
  },
  {
    id: 4,
    name: 'JRPG master',
    description: 'My favorite trails in the world',
    startDate: '2021-08-01',
    endDate: '2021-08-01',
    maxPlayers: 4,
    owner: MOCK_OWNER,
  },
  {
    id: 5,
    name: 'JRPG master',
    description: 'My favorite trails in the world',
    startDate: '2021-08-01',
    endDate: '2021-08-01',
    maxPlayers: 4,
    owner: MOCK_OWNER,
  },
  {
    id: 6,
    name: 'JRPG master',
    description: 'My favorite trails in the world',
    startDate: '2021-08-01',
    endDate: '2021-08-01',
    maxPlayers: 4,
    owner: MOCK_OWNER,
  },
  {
    id: 7,
    name: 'JRPG master',
    description: 'My favorite trails in the world',
    startDate: '2021-08-01',
    endDate: '2021-08-01',
    maxPlayers: 4,
    owner: MOCK_OWNER,
  },
];
