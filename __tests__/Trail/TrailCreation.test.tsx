import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import TrailCreation from '@/containers/Trail/TrailCreation';
import theme from '@/theme';
import '@/i18n';

describe('GameData component', () => {
  it('renders trail details correctly', () => {
    render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <TrailCreation />
        </ThemeProvider>
      </MemoryRouter>,
    );
    expect(screen.getByText('Crear nuevo trail')).toBeInTheDocument();
    expect(screen.getByText('Descripción')).toBeInTheDocument();
  });
});
