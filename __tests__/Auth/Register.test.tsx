import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import React from 'react';
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import Register from '@/components/Register/RegisterComponent';
import theme from '@/theme';
import 'jest-canvas-mock';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));
useRouter as jest.Mock<NextRouter>;

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ push: jest.fn() })),
}));

describe('Register page', () => {
  it('Renderiza el formulario de registro correctamente', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Register />
      </ThemeProvider>,
    );
    expect(screen.getByText('register_title')).toBeInTheDocument();
    expect(screen.getByLabelText('register_username')).toBeInTheDocument();
    expect(screen.getByLabelText('register_email')).toBeInTheDocument();
    expect(screen.getByLabelText('password')).toBeInTheDocument();
    expect(screen.getByLabelText('register_password_confirmation')).toBeInTheDocument();
    expect(screen.getByLabelText('Avatar')).toBeInTheDocument();
    expect(screen.getByText('register')).toBeInTheDocument();
  });
});
