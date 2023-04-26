import { ThemeProvider } from 'styled-components';
import {
  render,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import UserStats from '@/components/UserDetails/UserStats';
import { MOCK_USER_RATING_TEST } from '@/models/Rating/mock';
import theme from '@/theme';
import '@/i18n';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));
useRouter as jest.Mock<NextRouter>;
describe('UserStats', () => {
  const rating = MOCK_USER_RATING_TEST;
  it('renders no stats available message when no user rating is provided', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <UserStats userRating={null} />
      </ThemeProvider>,
    );
    expect(getByText('No hay estadísticas disponibles...')).toBeInTheDocument();
  });

  it('renders user rating stats when user rating is provided', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <UserStats userRating={rating} />
      </ThemeProvider>,
    );
    expect(getByText('5 - AMABILIDAD')).toBeInTheDocument();
    expect(getByText('4 - DISPONIBILIDAD')).toBeInTheDocument();
    expect(getByText('5 - COOPERACIÓN')).toBeInTheDocument();
  });
});
