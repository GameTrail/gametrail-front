import type { User } from '@/models/User/types';

export type Props = {
  userData: User;
};

export enum ButtonType {
  Trail = 'Trails',
  Games = 'Juegos',
  Comments = 'Comentarios',
  Players = 'Players',
  Chat = 'Chat',

}
