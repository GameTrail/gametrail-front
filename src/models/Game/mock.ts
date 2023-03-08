import { MOCK_USER_COMMENTS } from '../Comment/mock';
import type { Game } from './types';

export const MOCK_GAMES: Game[] = [
  {
    id: 1,
    name: 'Super Mario Bros.',
    genre: 'Platformer',
    platform: 'NES',
    release: '1985',
    image: 'https://upload.wikimedia.org/wikipedia/en/5/56/Super_Mario_Bros._box_art.png',
    comments: MOCK_USER_COMMENTS,
  },
  {
    id: 2,
    name: 'Super Mario Bros.',
    genre: 'Platformer',
    platform: 'NES',
    release: '1985',
    image: 'https://upload.wikimedia.org/wikipedia/en/5/56/Super_Mario_Bros._box_art.png',
    comments: MOCK_USER_COMMENTS,
  },
  {
    id: 3,
    name: 'Super Mario Bros.',
    genre: 'Platformer',
    platform: 'NES',
    release: '1985',
    image: 'https://upload.wikimedia.org/wikipedia/en/5/56/Super_Mario_Bros._box_art.png',
    comments: MOCK_USER_COMMENTS,
  },
  {
    id: 4,
    name: 'Super Mario Bros.',
    genre: 'Platformer',
    platform: 'NES',
    release: '1985',
    image: 'https://upload.wikimedia.org/wikipedia/en/5/56/Super_Mario_Bros._box_art.png',
    comments: MOCK_USER_COMMENTS,
  },

];

export const MOCK_GAME: Game = {
  id: 1,
  name: 'Super Mario Bros.',
  genre: 'Platformer',
  platform: 'NES',
  release: '1985',
  image: 'https://upload.wikimedia.org/wikipedia/en/5/56/Super_Mario_Bros._box_art.png',
  comments: MOCK_USER_COMMENTS,
};
