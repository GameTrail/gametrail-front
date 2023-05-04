import type { Platform } from '@/models/Platform/types';
import type { TrailMember } from '@/models/TrailUser/types';
import type { CommentsGame } from '../Comment/types';
import type { Game } from '../Game/types';
import type { User } from '../User/types';

export type Trail = {
  id: number;
  name: string;
  description: string;
  startDate: string;
  finishDate: string;
  maxPlayers: number;
  owner: User;
  platforms: Platform[];
  games: TrailGame[];
  users: TrailMember[];
};

export enum TrailGameStatus {
  PLAYING = 'PLAYING',
  PENDING = 'PENDING',
  FINISHED = 'FINISHED',
}

export type TrailGang = {
  id: number;
  image: string;
  players: User[];
  games: Game[];
  startDate: string;
};

export type TrailGame = {
  id: number;
  name: string;
  releaseDate: string;
  image: string;
  photos: string;
  description: string;
  genres: string[] | [];
  platform: string[] | [];
  comments_games: CommentsGame[] | [];
  message: null | string;
  priority: number | null;
  status: TrailGameStatus;
};

export type GameInTrail = {
  games: {
    comments_games: CommentsGame[] | [];
    description: string;
    genres: string[] | [];
    id: number;
    image: string;
    name: string;
    photos: string;
    platform: string[] | [];
    releaseDate: string;
  };
  message: string;
  priority: number;
  status: TrailGameStatus;
};

// export interface CommentsGame {
//   id: number;
//   commentText: string;
//   userWhoComments: Owner;
//   game: number | null;
// }

export interface Owner {
  avatar: string;
  email?: string;
  id: number;
  plan?: string;
  username: string;
}
