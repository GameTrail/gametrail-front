import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import TrailDetails from '@/containers/Trail/TrailDetails';
import { MOCK_TRAIL } from '@/models/Trail/mock';
import theme from '@/theme';
import '@/i18n';

describe('GameData component', () => {
  it('renders trail details correctly', () => {
    render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <TrailDetails trailData={MOCK_TRAIL} />
        </ThemeProvider>
      </MemoryRouter>,
    );
    expect(screen.getByText('2023-03-31')).toBeInTheDocument();
    expect(screen.getByText('2023-04-09')).toBeInTheDocument();
  });
});
