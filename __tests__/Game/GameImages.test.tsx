import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { GameImages } from '@/components/GameDetails';
import theme from '@/theme';

const mockGame = {
  id: 1,
  name: 'Diablo III',
  description: 'Description of game 1',
  platforms: ['PS4', 'Xbox One'],
  image: 'https://images.igdb.com/igdb/image/upload/t_original/co2l1u.jpg',
  releaseDate: '2012-05-15',
  photos: '//images.igdb.com/igdb/image/upload/t_original/scjgjx.jpg',
  genre: 'Adventure',
  comments_games: [],
};

describe('GameImages component', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <GameImages gameDetails={mockGame} />
        </ThemeProvider>
      </MemoryRouter>,
    );

    const images = new Set(screen.getAllByAltText('No hay imagen'));
    expect(images.size).toBe(2);
    images.forEach((image) => {
      expect(image).toBeInTheDocument();
    });
  });
});
