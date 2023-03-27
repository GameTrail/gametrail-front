import type { NextApiRequest, NextApiResponse } from 'next';
import type { Game } from '@/models/Game/types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Game>,
) {
  res.status(200).json({
    id: 1,
    name: 'Super Mario Bros.',
    releaseDate: '1985-09-13',
    image: 'https://upload.wikimedia.org/wikipedia/en/5/50/Super_Mario_Bros._box_art.jpg',
    photos: '',
    description: '',
    genre: [],
    platforms: [],
    comments_game: [],
  });
}
