import { ThemeProvider } from 'styled-components';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { CommentsComponent } from '@/components/Comments';
import type { User } from '@/models/User/types';
import theme from '@/theme';
import '@/i18n';

const mockFetchResponse = (url: String, response: User) => {
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
    const user = {
      id: 35,
      username: 'diedialop',
      email: 'email1@gmail.com',
      auth_token: 'xyz',
      avatar: 'https://i.imgur.com/I3hXhDr.jpeg',
      plan: 'Premium',
      games: [],
      trails: [],
      average_ratings: null,
      comments_received: [
        {
          id: 11,
          commentText: 'buenas partidas el otro día, qué grande eres :)',
          commentedUser: {
            id: 3,
            username: 'prueba-populate-3',
            avatar: 'si.com',
          },
          userWhoComments: {
            id: 11,
            username: 'flusperv',
            avatar: 'https://steamavatar.io/img/1477787653ea71Y.png',
          },
        },
        {
          id: 12,
          commentText: 'cuándo otros call of duty??',
          commentedUser: {
            id: 3,
            username: 'prueba-populate-3',
            avatar: 'si.com',
          },
          userWhoComments: {
            id: 5,
            username: 'nandende',
            avatar: 'https://steamavatar.io/img/14777415045aEzx.jpg',
          },
        },
      ],
    };

    mockFetchResponse(`gametrail-backend-s4-production.up.railway.app/api/user/${user.id}/`, user);
    render(
      <ThemeProvider theme={theme}>
        <CommentsComponent type="user" data={user} />
      </ThemeProvider>,
    );
    await waitFor(() => {
      const commentsComponent = screen.getByTestId('comments-component');
      expect(commentsComponent).toBeInTheDocument();
    });
  });
});
