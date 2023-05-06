import type { User as UserDetails } from '@/models/User/types';

export type TrailUser = {
  id: number;
  trail: number;

  user: UserDetails;

  owner: boolean;
};

export type TrailMember = {
  id: number | undefined;
  username: string | undefined;
  email: string | undefined;
  avatar: string | undefined;
  plan: string | undefined;
};
