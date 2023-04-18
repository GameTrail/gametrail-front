import type { FC } from 'react';
import React from 'react';
import { ButtonType } from '@/containers/GameDetails/types';
import useLanguage from '@/i18n/hooks';
import { getUserCookie } from '@/utils/login';
import { Button, Container, ContainerButtons } from './styles';
import type { Props } from './types';

const GameListsButtons: FC<Props> = ({ onClickButton, selectedButton }) => {
  const userCookie = getUserCookie();
  const disableChatButton = userCookie === null;
  const isActive = (button: ButtonType): boolean => selectedButton === button;
  const { t } = useLanguage();
  return (
    <Container>
      <ContainerButtons>
        <Button type="button" active={isActive(ButtonType.Trail)} onClick={() => onClickButton(ButtonType.Trail)}>{t('game_trails')}</Button>
        <Button disabled={disableChatButton} type="button" active={isActive(ButtonType.Comments)} onClick={() => onClickButton(ButtonType.Comments)}>{t('game_comments')}</Button>
      </ContainerButtons>
    </Container>
  );
};

export default GameListsButtons;
