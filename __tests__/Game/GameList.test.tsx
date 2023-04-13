import { ThemeProvider } from 'styled-components';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { withRouter } from 'next/router';
import Games from '@/pages/games';
import theme from '@/theme';

const WithRouterGames = withRouter(Games);

describe('GameList component', () => {
  it('should render error message if fetch fails', async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      throw new Error('Unexpected error');
    });

    render(
      <ThemeProvider theme={theme}>
        <WithRouterGames />
      </ThemeProvider>,
    );
    await waitFor(() => {
      const errorMsg = screen.getByText(/ha ocurrido un error/i);
      expect(errorMsg).toBeInTheDocument();
    });
  });
});
