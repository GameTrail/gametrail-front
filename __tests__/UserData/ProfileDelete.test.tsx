import { ThemeProvider } from 'styled-components';
import {
  render, screen, fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import ProfileDelete from '@/components/ProfileConfig/ProfileDelete';
import theme from '@/theme';
import '@/i18n';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));
useRouter as jest.Mock<NextRouter>;
describe('ProfileDelete', () => {
  it('should render the delete button', () => {
    render(
      <ThemeProvider theme={theme}>
        <ProfileDelete />
      </ThemeProvider>,
    );
    expect(screen.getByText('Eliminar cuenta')).toBeInTheDocument();
  });

  it('should show the confirmation popup when delete button is clicked', () => {
    render(
      <ThemeProvider theme={theme}>
        <ProfileDelete />
      </ThemeProvider>,
    );
    const deleteButton = screen.getByText('Eliminar cuenta');
    fireEvent.click(deleteButton);

    expect(screen.getByText('¿Estás seguro de que quieres borrar tu cuenta?')).toBeInTheDocument();
    expect(screen.getByText('Sí, borrar cuenta')).toBeInTheDocument();
    expect(screen.getByText('No, quiero cancelar')).toBeInTheDocument();
  });
});
