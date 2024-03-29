import { ThemeProvider } from 'styled-components';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import TrailList from '@/containers/TrailList';
import theme from '@/theme';
import '@/i18n';

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
      const errorMsg = screen.getByText(/Ups! Lo sentimos, ha ocurrido un error inesperado./i);
      expect(errorMsg).toBeInTheDocument();
    });
  });
});
