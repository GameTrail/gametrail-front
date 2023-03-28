import type { DefaultTheme } from 'styled-components';
import { TrailGameStatus } from '@/models/Trail/types';

export const handleStateColor = (theme: DefaultTheme, state: TrailGameStatus) => {
  if (state === TrailGameStatus.FINISHED) return theme.nord.red;
  if (state === TrailGameStatus.PLAYING) return theme.nord.green;
  return theme.nord.orange;
};
