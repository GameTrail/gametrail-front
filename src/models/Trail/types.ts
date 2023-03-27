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
  games: Game[];
  users: TrailMember[];
};

export type TrailGang = {
  id: number;
  image: string;
  players: User[];
  games: Game[];
  startDate: string;
};
