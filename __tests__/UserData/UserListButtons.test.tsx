import { ThemeProvider } from 'styled-components';
import {
  render, fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import UserListsButtons from '@/components/UserDetails/UserListsButtons';
import { ButtonType } from '@/containers/UserDetails/types';
import theme from '@/theme';
import '@/i18n';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));
useRouter as jest.Mock<NextRouter>;

describe('UserListsButtons', () => {
  it('renders three buttons', () => {
    const onClickButton = jest.fn();
    const { getAllByRole } = render(
      <ThemeProvider theme={theme}>
        <UserListsButtons onClickButton={onClickButton} selectedButton={ButtonType.Trail} />
      </ThemeProvider>,
    );
    const buttons = getAllByRole('button');
    expect(buttons).toHaveLength(3);
  });

  it('calls onClickButton when a button is clicked', () => {
    const onClickButton = jest.fn();
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <UserListsButtons onClickButton={onClickButton} selectedButton={ButtonType.Trail} />
      </ThemeProvider>,
    );
    const gamesButton = getByText('Juegos');
    fireEvent.click(gamesButton);
    expect(onClickButton).toHaveBeenCalledWith(ButtonType.Games);
  });

  it('disables the comments button when userCookie is null', () => {
    const onClickButton = jest.fn();
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <UserListsButtons onClickButton={onClickButton} selectedButton={ButtonType.Trail} />
      </ThemeProvider>,
    );
    const commentsButton = getByText('Comentarios');
    expect(commentsButton).toBeDisabled();
  });
});
