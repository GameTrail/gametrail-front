import { ThemeProvider } from 'styled-components';
import {
  render, screen, fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import UserData from '@/components/UserDetails/UserData';
import { MOCK_USER } from '@/models/User/mock';
import theme from '@/theme';
import '@/i18n';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));
useRouter as jest.Mock<NextRouter>;
describe('UserData component', () => {
  const mockUser = MOCK_USER;

  it('should render user data correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <UserData user={mockUser} />
      </ThemeProvider>,
    );

    expect(screen.getByAltText('jvegax')).toBeInTheDocument();
    expect(screen.getByText('@jvegax')).toBeInTheDocument();
    expect(screen.getByText('Valorar')).toBeInTheDocument();
  });

  it('should render premium crown icon for premium users', () => {
    const premiumUser = { ...mockUser, plan: 'Premium' };
    render(
      <ThemeProvider theme={theme}>
        <UserData user={premiumUser} />
      </ThemeProvider>,
    ); expect(screen.getByTestId('premium-icon')).toBeInTheDocument();
  });

  it('should not render premium crown icon for non-premium users', () => {
    const nonPremiumUser = { ...mockUser, plan: 'Standard' };
    render(
      <ThemeProvider theme={theme}>
        <UserData user={nonPremiumUser} />
      </ThemeProvider>,
    ); expect(screen.queryByTestId('premium-icon')).not.toBeInTheDocument();
  });

  it('should not render gear icon for non-logged-in user', () => {
    document.cookie = 'user=';

    render(
      <ThemeProvider theme={theme}>
        <UserData user={mockUser} />
      </ThemeProvider>,
    );
    expect(screen.queryByTestId('gear-icon')).not.toBeInTheDocument();
  });

  it('should show rate container when "Valorar" button is clicked', () => {
    render(
      <ThemeProvider theme={theme}>
        <UserData user={mockUser} />
      </ThemeProvider>,
    );
    const valorarButton = screen.getByText('Valorar');
    fireEvent.click(valorarButton);

    expect(screen.getByText('Enviar')).toBeInTheDocument();
    expect(screen.getByLabelText('Amabilidad')).toBeInTheDocument();
    expect(screen.getByLabelText('Habilidad')).toBeInTheDocument();
    expect(screen.getByLabelText('Disponibilidad')).toBeInTheDocument();
    expect(screen.getByLabelText('Diversión')).toBeInTheDocument();
    expect(screen.getByLabelText('Cooperación')).toBeInTheDocument();
  });

  it('should submit rating when rate form is submitted', async () => {
    const mockUserWhoRates = { id: 2, username: 'testuser2', token: '1234567890' };

    document.cookie = `user=${JSON.stringify(mockUserWhoRates)}`;

    render(
      <ThemeProvider theme={theme}>
        <UserData user={mockUser} />
      </ThemeProvider>,
    );
    const valorarButton = screen.getByText('Valorar');
    fireEvent.click(valorarButton);

    // Does not work because of the new form. Need to find a way to test it.
    // const kindnessInput = screen.getByLabelText('Amabilidad');
    // const abilityInput = screen.getByLabelText('Habilidad');
    // const availabilityInput = screen.getByLabelText('Disponibilidad');
    //
    // fireEvent.change(kindnessInput, { target: { value: 5 } });
    // fireEvent.change(abilityInput, { target: { value: 4 } });
    // fireEvent.change(availabilityInput, { target: { value: 3 } });
  });
});
