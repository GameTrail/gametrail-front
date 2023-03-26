import type { FC } from 'react';
import React from 'react';
import { ButtonType } from '@/containers/UserDetails/types';
import { Button, Container } from './styles';
import type { Props } from './types';

const TrailButtons: FC<Props> = ({ onClickButton, selectedButton }) => {
  const isActive = (button: ButtonType): boolean => selectedButton === button;
  return (
    <Container>
      <Button type="button" active={isActive(ButtonType.Chat)} onClick={() => onClickButton(ButtonType.Chat)}>Chat</Button>
      <Button type="button" active={isActive(ButtonType.Games)} onClick={() => onClickButton(ButtonType.Games)}>Juegos</Button>
      <Button type="button" active={isActive(ButtonType.Players)} onClick={() => onClickButton(ButtonType.Players)}>Jugadores</Button>
    </Container>
  );
};

export default TrailButtons;
