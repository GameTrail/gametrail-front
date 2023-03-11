import type { User } from '@/models/User/types';

export type Props = {
  userData: User;
};

export enum ButtonType {
  Trail = 'Trails',
  Games = 'Games',
  Comments = 'Comments',
}
