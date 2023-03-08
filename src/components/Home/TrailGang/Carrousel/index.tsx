import type { FC } from 'react';
import React from 'react';
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import type { TrailGang as TrailGangProps } from '@/models/Trail/types';
import { GameFlow } from './styles';

export type Props = {
  trailGang: TrailGangProps;
};

const Carrousel:FC<Props> = ({ trailGang }) => (
  <GameFlow>
    <Carousel indicators={false} controls={false}>
      <Carousel.Item>
        <Image src={trailGang.image} alt="none" width={400} height={500} />
      </Carousel.Item>
    </Carousel>
  </GameFlow>

);

export default Carrousel;
