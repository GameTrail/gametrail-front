import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import React from 'react';
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import TrailDetails from '@/containers/Trail/TrailDetails';
import { MOCK_TRAIL } from '@/models/Trail/mock';
import theme from '@/theme';
import '@/i18n';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));
useRouter as jest.Mock<NextRouter>;

describe('GameData component', () => {
  it('renders trail details correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <TrailDetails trailData={MOCK_TRAIL} />
      </ThemeProvider>,
    );
    expect(screen.getByText('2023-03-31')).toBeInTheDocument();
    expect(screen.getByText('2023-04-09')).toBeInTheDocument();
  });
});
