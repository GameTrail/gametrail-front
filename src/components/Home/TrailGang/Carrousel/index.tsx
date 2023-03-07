import type { FC } from 'react';
import React from 'react';
import Image from 'next/image';
import type { TrailGang as TrailGangProps } from '@/models/Trail/types';

export type Props = {
  trailGang: TrailGangProps;
};

const Carrousel:FC<Props> = ({ trailGang }) => (
  <Image src={trailGang.image} alt="none" width={50} height={50} />
);

export default Carrousel;
