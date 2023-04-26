import { ThemeProvider } from 'styled-components';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { ChatComponent } from '@/components/Chat';
import { TrailGameStatus } from '@/models/Trail/types';
import theme from '@/theme';
import '@/i18n';

describe('ChatComponent', () => {
  it('should render ChatComponent', async () => {
    const trailData = {
      id: 108,
      name: 'Trail Increible todos los souls',
      description: 'Vamos a jugar los souls',
      startDate: '2023-04-17',
      finishDate: '2023-04-17',
      maxPlayers: 4,
      owner: {
        id: 35,
        username: 'diedialop',
        email: 'diedialop2@gmail.com',
        auth_token: 'xyz',
        avatar: 'https://i.imgur.com/I3hXhDr.jpeg',
        plan: 'Premium',
        games: [],
        trails: [],
        average_ratings: null,
        comments_received: [],
      },
      platforms: [
        { platform: 'PC' },
      ],
      games: [
        {
          id: 316,
          name: 'Super Mario Bros.',
          releaseDate: '1987-05-15',
          image: '//images.igdb.com/igdb/image/upload/t_original/co2362.jpg',
          photos: '//images.igdb.com/igdb/image/upload/t_original/sc84hl.jpg, //images.igdb.com/igdb/image/upload/t_original/sc84hm.jpg, //images.igdb.com/igdb/image/upload/t_original/sc84hn.jpg, //images.igdb.com/igdb/image/upload/t_original/sc84ho.jpg, //images.igdb.com/igdb/image/upload/t_original/sc84hp.jpg, ',
          description: 'A side scrolling 2D platformer and first entry in the Super Mario franchise, Super Mario Bros. follows Italian plumber Mario as he treks across many levels of platforming challenges featuring hostile enemies to rescue Princess Peach from the evil king Bowser.',
          genres: [],
          platform: [],
          comments_games: [],
          message: null,
          priority: 2,
          status: TrailGameStatus.PENDING,
        },
      ],
      users: [
        {
          id: 35,
          username: 'diedialop',
          email: 'diedialop2@gmail.com',
          avatar: 'https://i.imgur.com/I3hXhDr.jpeg',
          auth_token: 'xyz',
          plan: 'Premium',
          games: [],
          trails: [],
          average_ratings: null,
          comments_received: [],
        },
      ],
    };

    render(
      <ThemeProvider theme={theme}>
        <ChatComponent trailData={trailData} />
      </ThemeProvider>,
    );

    await waitFor(() => {
      const chatMessagesComponent = screen.getByTestId('messages-container');
      const chatInputComponent = screen.getByTestId('input-container');
      expect(chatMessagesComponent).toBeInTheDocument();
      expect(chatInputComponent).toBeInTheDocument();
      const scrollIntoViewMock = jest.fn();
      const lastElement = { current: { scrollIntoView: scrollIntoViewMock } };
      expect(lastElement.current).not.toBeNull();
      lastElement.current.scrollIntoView();
      expect(scrollIntoViewMock).toHaveBeenCalled();
    });
  });
});
