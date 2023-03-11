import type { Comment } from '../Comment/types';
import type { GameList } from '../GameList/types';
import type { Rating } from '../Rating/types';
import type { TrailList } from '../TrailList/types';

export type User = {
  id: number;
  username: string;
  profilePicture: string;
  rating: Rating[];
  gameList: GameList[];
  trailList?: TrailList[];
  comments: Comment[];
};
