import { ThemeProvider } from 'styled-components';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import Login from '@/components/Login/LoginComponent';
import theme from '@/theme';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));
useRouter as jest.Mock<NextRouter>;

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ push: jest.fn() })),
}));

describe('Login page', () => {
  it('Renderiza el formulario correctamente', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>,
    );
    expect(screen.getByText('login_to_gametrail')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Nombre de usuario')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Contraseña')).toBeInTheDocument();
    expect(screen.getByText('login')).toBeInTheDocument();
  });
  it('Al pulsar el botón sin rellenar los campos, se genera un error', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>,
    );
    const button = screen.getByText('login');

    fireEvent.click(button);
    const errorElement = await screen.findByText(/Error al inicial sesión, comprueba tus credenciales./i);
    expect(errorElement).toBeInTheDocument();
  });
});
