import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import TrailDetails from '@/containers/Trail/TrailDetails';
import { MOCK_TRAIL } from '@/models/Trail/mock';
import theme from '@/theme';
import '@/i18n';

jest.mock('next/router', () => ({
  useRouter() {
    return ({
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    });
  },
}));

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
