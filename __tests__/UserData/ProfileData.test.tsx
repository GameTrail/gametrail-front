import { ThemeProvider } from 'styled-components';
import {
  render, screen, fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import ProfileData from '@/components/ProfileConfig/ProfileData';
import { MOCK_USER_COOKIE } from '@/models/User/mock';
import theme from '@/theme';
import '@/i18n';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));
useRouter as jest.Mock<NextRouter>;

const mockUser = MOCK_USER_COOKIE;

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ push: jest.fn() })),
}));

jest.mock('@/utils/login', () => ({
  getUserCookie: jest.fn(() => mockUser),
  setMinCookie: jest.fn(),
}));

describe('ProfileData', () => {
  it('should render the form with user data', () => {
    render(
      <ThemeProvider theme={theme}>
        <ProfileData userData={mockUser} />
      </ThemeProvider>,
    );
    expect(screen.getByLabelText('Email')).toHaveValue(mockUser.email);
    expect(screen.getByLabelText('Avatar')).toHaveValue(mockUser.avatar);
  });

  it('should display validation errors when the API returns an error', async () => {
    render(
      <ThemeProvider theme={theme}>
        <ProfileData userData={mockUser} />
      </ThemeProvider>,
    );

    const submitButton = screen.getByText('Actualizar datos');
    fireEvent.click(submitButton);
    expect(screen.getByText('Ha ocurrido un error')).toBeInTheDocument();
  });
});
