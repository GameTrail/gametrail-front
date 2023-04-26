import { ThemeProvider } from 'styled-components';
import {
  render, screen, fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import ProfileExternalConnect from '@/components/ProfileConfig/ProfileExternalConnect';
import theme from '@/theme';
import '@/i18n';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));
useRouter as jest.Mock<NextRouter>;
describe('ProfileExternalConnect', () => {
  it('should display Steam and Xbox connect buttons', () => {
    render(
      <ThemeProvider theme={theme}>
        <ProfileExternalConnect />
      </ThemeProvider>,
    );
    expect(screen.getByAltText('Steam Logo')).toBeInTheDocument();
    expect(screen.getByAltText('Xbox Logo')).toBeInTheDocument();
  });

  it('should display connect button for Steam and Xbox', () => {
    render(
      <ThemeProvider theme={theme}>
        <ProfileExternalConnect />
      </ThemeProvider>,
    );
    const steamButton = screen.getByTestId('SteamButton');
    expect(steamButton).toBeInTheDocument();

    const xboxButton = screen.getByTestId('XboxButton');
    expect(xboxButton).toBeInTheDocument();
  });

  it('should display connected to Steam message after clicking Steam connect button', () => {
    render(
      <ThemeProvider theme={theme}>
        <ProfileExternalConnect />
      </ThemeProvider>,
    );
    const steamButton = screen.getByTestId('SteamButton');
    fireEvent.click(steamButton);
    expect(screen.getByText('Conectado a Steam!')).toBeInTheDocument();
  });
});
