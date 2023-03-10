import { RatingType } from '@/models/Rating/type';
import theme from '@/theme';

export const COLOR_MAP = {
  [RatingType.Kindness]: theme.nord.orange,
  [RatingType.Ability]: theme.nord.yellow,
  [RatingType.Availability]: theme.nord.blue1,
  [RatingType.Funny]: theme.nord.purple,
  [RatingType.Teamwork]: theme.nord.red,
};
