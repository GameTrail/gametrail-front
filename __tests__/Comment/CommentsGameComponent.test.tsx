import { ThemeProvider } from 'styled-components';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { CommentsComponent } from '@/components/Comments';
import type { Game } from '@/models/Game/types';
import theme from '@/theme';
import '@/i18n';

const mockFetchResponse = (url: String, response: Game) => {
  global.fetch = jest.fn().mockResolvedValueOnce({
    json: () => Promise.resolve(response),
    ok: true,
  } as Response);
};

const intersectionObserverMock = () => ({
  observe: () => null,
});
window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);

describe('CommentsComponent', () => {
  it('should render without error', async () => {
    const game = {
      id: 316,
      name: 'Super Mario Bros.',
      releaseDate: '1987-05-15',
      image: '//images.igdb.com/igdb/image/upload/t_original/co2362.jpg',
      photos: '//images.igdb.com/igdb/image/upload/t_original/sc84hl.jpg, //images.igdb.com/igdb/image/upload/t_original/sc84hm.jpg, //images.igdb.com/igdb/image/upload/t_original/sc84hn.jpg, //images.igdb.com/igdb/image/upload/t_original/sc84ho.jpg, //images.igdb.com/igdb/image/upload/t_original/sc84hp.jpg, ',
      description: 'A side scrolling 2D platformer and first entry in the Super Mario franchise, Super Mario Bros. follows Italian plumber Mario as he treks across many levels of platforming challenges featuring hostile enemies to rescue Princess Peach from the evil king Bowser.',
      genre: '',
      platforms: ['PC'],
      comments_games: [
        {
          id: 11,
          commentText: 'buenas partidas el otro día, qué grande eres :)',
          userWhoComments: {
            id: 11,
            username: 'flusperv',
            avatar: 'https://steamavatar.io/img/1477787653ea71Y.png',
          },
          game: 316,
        },
      ],
    };
    mockFetchResponse(`gametrail-backend-s4-production.up.railway.app/api/game/${game.id}/`, game);
    render(
      <ThemeProvider theme={theme}>
        <CommentsComponent type="game" data={game} />
      </ThemeProvider>,
    );
    await waitFor(() => {
      const commentsComponent = screen.getByTestId('comments-component');
      expect(commentsComponent).toBeInTheDocument();
    });
  });
});
