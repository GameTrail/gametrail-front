import type { FC } from 'react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import type { TrailGang as TrailGangProps } from '@/models/Trail/types';
import { CarouselImage, CarouselContainer } from './styles';

export type Props = {
  trailGangData: TrailGangProps;
};

const Carrousel:FC<Props> = ({ trailGangData }) => (
  <CarouselContainer>
    <Carousel axis="vertical" autoPlay swipeable infiniteLoop showStatus={false} showIndicators={false} showArrows={false}>
      <CarouselImage
        src={trailGangData.image}
        alt="Imagen 1"
        width={200}
        height={300}
      />
      <CarouselImage
        src={trailGangData.image}
        alt="Imagen 1"
        width={200}
        height={300}
      />
      <CarouselImage
        src={trailGangData.image}
        alt="Imagen 1"
        width={200}
        height={300}
      />
    </Carousel>
  </CarouselContainer>
);

export default Carrousel;
