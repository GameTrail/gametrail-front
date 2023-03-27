import type { User as UserDetails } from '@/models/User/types';

export type TrailUser = {
  id: number;
  trail: number;

  user: UserDetails;

  owner: boolean;
};

export type TrailMember = {
  id: number;
  username: string;
  email: string;
  avatar: string;
  plan: string;
};
