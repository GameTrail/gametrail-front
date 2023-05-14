import type { FC } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import { ButtonType } from '@/containers/UserDetails/types';
import useLanguage from '@/i18n/hooks';
import { Button, Container } from './styles';

export type Props = {
  onClickButton: (button: ButtonType) => void;
  selectedButton: ButtonType;
};

const TrailButtons: FC<Props> = ({ onClickButton, selectedButton }) => {
  const { t } = useLanguage();
  const isActive = (button: ButtonType): boolean => selectedButton === button;
  return (
    <motion.div layout>
      <Container>
        <Button type="button" active={isActive(ButtonType.Chat)} onClick={() => onClickButton(ButtonType.Chat)}>{t('chat')}</Button>
        <Button type="button" active={isActive(ButtonType.Games)} onClick={() => onClickButton(ButtonType.Games)}>{t('games')}</Button>
        <Button type="button" active={isActive(ButtonType.Players)} onClick={() => onClickButton(ButtonType.Players)}>{t('players')}</Button>
      </Container>
    </motion.div>
  );
};

export default TrailButtons;
