import { RatingType } from '@/models/Rating/types';
import theme from '@/theme';

export const COLOR_MAP = {
  [RatingType.KINDNESS]: theme.nord.orange,
  [RatingType.ABILITY]: theme.nord.yellow,
  [RatingType.AVAILABILITY]: theme.nord.blue1,
  [RatingType.FUNNY]: theme.nord.purple,
  [RatingType.TEAMWORK]: theme.nord.red,
};
