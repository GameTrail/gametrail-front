import { ThemeProvider } from 'styled-components';
import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/router';
import GameList from '@/components/GameList/Games';
import { MOCK_GAMES } from '@/models/Game/mock';
import theme from '@/theme';

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockReturnValue({ push: jest.fn() }),
}));

describe('GameList', () => {
  it('renders without errors', () => {
    render(
      <ThemeProvider theme={theme}>
        <GameList
          games={MOCK_GAMES}
          pages={1}
          currentPage={1}
          searchQuery=""
          handleUpdateSearchQuery={() => {}}
          handlePagination={() => {}}
        />
      </ThemeProvider>,
    );

    // Assert that the component renders without throwing an error
    expect(screen.getByText('Super Mario Bros 3')).toBeInTheDocument();
    expect(screen.getByText('Grand Thef Auto V')).toBeInTheDocument();
    expect(screen.getByText('Inazuma Eleven II: Ventisca Eterna')).toBeInTheDocument();
  });

  it('navigates to game details when a game is clicked', () => {
    render(
      <ThemeProvider theme={theme}>
        <GameList
          games={MOCK_GAMES}
          pages={1}
          currentPage={1}
          searchQuery=""
          handleUpdateSearchQuery={() => {}}
          handlePagination={() => {}}
        />
      </ThemeProvider>,
    );

    const gameItem = screen.getByText('Super Mario Bros 3');
    fireEvent.click(gameItem);
    expect(useRouter().push).toHaveBeenCalledWith('/game/1');
  });
});
