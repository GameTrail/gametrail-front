import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import GameData from '@/components/GameDetails/GameData';
import { MOCK_USER_GAME_LIST } from '@/models/GameList/mock';
import theme from '@/theme';
import '@/i18n';

const mockGame = {
  id: 1,
  name: 'Game 1',
  description: 'Description of game 1',
  platforms: ['PS4', 'Xbox One'],
  image: 'http://example.com/game1.jpg',
  releaseDate: '2022-01-01',
  photos: 'https://example.com/game1.jpg,https://example.com/game2.jpg',
  genre: 'Adventure',
  comments_games: [],
};

describe('GameData component', () => {
  it('renders game details correctly', () => {
    render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <GameData gameDetails={mockGame} />
        </ThemeProvider>
      </MemoryRouter>,
    );

    expect(screen.getByAltText('No hay imagen')).toBeInTheDocument();
    expect(screen.getByText('Game 1')).toBeInTheDocument();
    expect(screen.getByText('Description of game 1')).toBeInTheDocument();
    expect(screen.getByText('PS4')).toBeInTheDocument();
    expect(screen.getByText('Xbox One')).toBeInTheDocument();

    const user = { id: 1, token: 'test-token', games: MOCK_USER_GAME_LIST };
    const userString = JSON.stringify(user);
    localStorage.setItem('user', userString);
    const checkGameInUserList = () => user.games.some((game) => (game.id === mockGame.id));

    if (user && !checkGameInUserList()) {
      expect(screen.getByText('Añadir')).toBeInTheDocument();
    }
  });
});
