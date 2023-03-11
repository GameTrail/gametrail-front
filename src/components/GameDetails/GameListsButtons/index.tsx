import type { FC } from 'react';
import React from 'react';
import { ButtonType } from '@/containers/GameDetails/types';
import { Button, Container, ContainerButtons } from './styles';
import type { Props } from './types';

const GameListsButtons: FC<Props> = ({ onClickButton, selectedButton }) => {
  const isActive = (button: ButtonType): boolean => selectedButton === button;
  return (
    <Container>
      <ContainerButtons>
        <Button type="button" active={isActive(ButtonType.Trail)} onClick={() => onClickButton(ButtonType.Trail)}>Trails</Button>
        <Button type="button" active={isActive(ButtonType.Comments)} onClick={() => onClickButton(ButtonType.Comments)}>Comentarios</Button>
      </ContainerButtons>
    </Container>
  );
};

export default GameListsButtons;
