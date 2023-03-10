import type { DefaultTheme } from 'styled-components';
import { GameListState } from '@/models/GameList/types';

export const handleStateColor = (theme: DefaultTheme, state: GameListState) => {
  if (state === GameListState.FINISHED) return theme.nord.red;
  if (state === GameListState.PLAYING) return theme.nord.green;
  return theme.nord.orange;
};
