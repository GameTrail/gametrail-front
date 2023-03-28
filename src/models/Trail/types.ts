import type { Platform } from '@/models/Platform/types';
import type { TrailMember } from '@/models/TrailUser/types';
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
  comments_games: CommentsGame[] | [];
  description: string;
  genres: string[] | [];
  id: number;
  image: string;
  message: null | string;
  name: string;
  photos: string;
  platform: string[] | [];
  priority: number | null;
  releaseDate: string;
  status: TrailGameStatus;
};

export interface CommentsGame {
  commentText: string;
  game: number;
  id: number;
  userWhoComments: Owner;
}

export interface Owner {
  avatar: string;
  email?: string;
  id: number;
  plan?: string;
  username: string;
}
