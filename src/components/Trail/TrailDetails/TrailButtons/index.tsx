import type { FC } from 'react';
import React from 'react';
import { ButtonType } from '@/containers/UserDetails/types';
import useLanguage from '@/i18n/hooks';
import type { Trail } from '@/models/Trail/types';
import { getUserCookie } from '@/utils/login';
import { Button, Container } from './styles';

export type Props = {
  onClickButton: (button: ButtonType) => void;
  selectedButton: ButtonType;
  trailData: Trail;
};

const TrailButtons: FC<Props> = ({ onClickButton, selectedButton, trailData }) => {
  const { t } = useLanguage();
  const userCookie = getUserCookie();
  const isUserInTrail = trailData.users.find((user) => user.id === userCookie?.id);
  const disableChatButton = () => {
    let result = false;
    if (userCookie === null || isUserInTrail === undefined) {
      result = true;
    }

    return result;
  };
  const isActive = (button: ButtonType): boolean => selectedButton === button;
  return (
    <Container>
      <Button disabled={disableChatButton()} type="button" active={isActive(ButtonType.Chat)} onClick={() => onClickButton(ButtonType.Chat)}>{t('chat')}</Button>
      <Button type="button" active={isActive(ButtonType.Games)} onClick={() => onClickButton(ButtonType.Games)}>{t('games')}</Button>
      <Button type="button" active={isActive(ButtonType.Players)} onClick={() => onClickButton(ButtonType.Players)}>{t('players')}</Button>
    </Container>
  );
};

export default TrailButtons;
