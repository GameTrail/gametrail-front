import { ThemeProvider } from 'styled-components';
import {
  render,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import UserAverageRating from '@/components/UserDetails/UserAverageRating';
import { MOCK_USER_RATING_TEST } from '@/models/Rating/mock';
import theme from '@/theme';
import '@/i18n';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));
useRouter as jest.Mock<NextRouter>;
describe('UserAverageRating', () => {
  const userRating = MOCK_USER_RATING_TEST;
  it('should render the average rating and icon', () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <UserAverageRating userRating={userRating} />
      </ThemeProvider>,
    );
    const averageRatingElement = getByText('4.6');
    expect(averageRatingElement).toBeInTheDocument();
    const iconElement = getByTestId('rating-icon');
    expect(iconElement).toBeInTheDocument();
  });
});
