import type { FC } from 'react';
import React from 'react';
import Link from 'next/link';
import { GameGangLottie } from '@/components/Lotties';
import type { Trail as TrailGangProps } from '@/models/Trail/types';
import GameGang from './GameGang';
import {
  Container, About, Description, Button,
} from './styles';

export type Props = {
  trailGang: TrailGangProps;
};

const TrailGang:FC<Props> = ({ trailGang }) => (
  <>
    <Container>
      <GameGangLottie />
      <GameGang trailGang={trailGang} />
    </Container>
    <About>
      <Description>
        Si quieres salir en la pagina de inicio cada semana, crea tu primer trail!
      </Description>
      <Link href="/trail/create">
        <Button animated>Crear trail</Button>
      </Link>
    </About>
  </>
);

export default TrailGang;
