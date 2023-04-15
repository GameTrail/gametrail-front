import type { FC } from 'react';
import React from 'react';
import Link from 'next/link';
import { GameGangLottie } from '@/components/Lotties';
import useLanguage from '@/i18n/hooks';
import type { Trail as TrailGangProps } from '@/models/Trail/types';
import GameGang from './GameGang';
import {
  Container, About, Description, Button,
} from './styles';

export type Props = {
  trailGang: TrailGangProps;
};

const TrailGang:FC<Props> = ({ trailGang }) => {
  const { t } = useLanguage();

  return (
    <>
      <Container>
        <GameGangLottie />
        <GameGang trailGang={trailGang} />
      </Container>
      <About>
        <Description>
          {t('trailgang_ad')}
        </Description>
        <Link href="/trail/create">
          <Button animated>{t('create_trail')}</Button>
        </Link>
      </About>
    </>
  );
};

export default TrailGang;
