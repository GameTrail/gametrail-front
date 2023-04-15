import type { FC } from 'react';
import React from 'react';
import { ButtonType } from '@/containers/UserDetails/types';
import useLanguage from '@/i18n/hooks';
import { Button, Container } from './styles';
import type { Props } from './types';

const UserListsButtons: FC<Props> = ({ onClickButton, selectedButton }) => {
  const { t } = useLanguage();
  const isActive = (button: ButtonType): boolean => selectedButton === button;
  return (
    <Container>
      <Button type="button" active={isActive(ButtonType.Games)} onClick={() => onClickButton(ButtonType.Games)}>{t('games')}</Button>
      <Button type="button" active={isActive(ButtonType.Trail)} onClick={() => onClickButton(ButtonType.Trail)}>{t('trails')}</Button>
      <Button type="button" active={isActive(ButtonType.Comments)} onClick={() => onClickButton(ButtonType.Comments)}>{t('comments')}</Button>
    </Container>
  );
};

export default UserListsButtons;
