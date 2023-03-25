import type { User } from '../User/types';

export type TrailList = {
  id: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  maxPlayers: number;
  owner: User;
};
