import type { FC } from 'react';
import React from 'react';
import { ButtonType } from '@/containers/UserDetails/types';
import { Button, Container } from './styles';
import type { Props } from './types';

const UserListsButtons: FC<Props> = ({ onUpdateButton }) => (
  <Container>
    <Button type="button" onClick={() => onUpdateButton(ButtonType.Games)}>Games</Button>
    <Button type="button" onClick={() => onUpdateButton(ButtonType.Trail)}>Trails</Button>
    <Button type="button" onClick={() => onUpdateButton(ButtonType.Comments)}>Comments</Button>
  </Container>
);

export default UserListsButtons;
