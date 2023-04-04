import { ThemeProvider } from 'styled-components';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import TrailList from '@/containers/TrailList';
import theme from '@/theme';

describe('TrailList component', () => {
  it('should render error message if fetch fails', async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      throw new Error('Unexpected error');
    });

    render(
      <ThemeProvider theme={theme}>
        <TrailList />
      </ThemeProvider>,
    );
    await waitFor(() => {
      const errorMsg = screen.getByText(/ha ocurrido un error/i);
      expect(errorMsg).toBeInTheDocument();
    });
  });
});
