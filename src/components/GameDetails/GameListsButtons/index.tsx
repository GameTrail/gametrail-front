import type { FC } from 'react';
import React from 'react';
import { ButtonType } from '@/containers/GameDetails/types';
import useLanguage from '@/i18n/hooks';
import { Button, Container, ContainerButtons } from './styles';
import type { Props } from './types';

const GameListsButtons: FC<Props> = ({ onClickButton, selectedButton }) => {
  const isActive = (button: ButtonType): boolean => selectedButton === button;
  const { t } = useLanguage();
  return (
    <Container>
      <ContainerButtons>
        <Button type="button" active={isActive(ButtonType.Trail)} onClick={() => onClickButton(ButtonType.Trail)}>{t('game_trails')}</Button>
        <Button type="button" active={isActive(ButtonType.Comments)} onClick={() => onClickButton(ButtonType.Comments)}>{t('game_comments')}</Button>
      </ContainerButtons>
    </Container>
  );
};

export default GameListsButtons;
