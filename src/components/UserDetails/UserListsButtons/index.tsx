import type { FC } from 'react';
import React from 'react';
import { ButtonType } from '@/containers/UserDetails/types';
import { Button, Container } from './styles';
import type { Props } from './types';

const UserListsButtons: FC<Props> = ({ onUpdateButton, selectedButton }) => {
  const isActive = (button: ButtonType): boolean => selectedButton === button;
  return (
    <Container>
      <Button type="button" active={isActive(ButtonType.Games)} onClick={() => onUpdateButton(ButtonType.Games)}>Games</Button>
      <Button type="button" active={isActive(ButtonType.Trail)} onClick={() => onUpdateButton(ButtonType.Trail)}>Trails</Button>
      <Button type="button" active={isActive(ButtonType.Comments)} onClick={() => onUpdateButton(ButtonType.Comments)}>Comments</Button>
    </Container>
  );
};

export default UserListsButtons;
