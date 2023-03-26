import type { Game } from '@/models/Game/types';

export type Props = {
  userData: Game;
};

export enum ButtonType {
  Trail = 'Trails',
  Comments = 'Comments',
  Chat = 'Chat',
  Players = 'Players',
  Games = 'Games',
}
