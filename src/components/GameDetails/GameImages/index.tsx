import type { FC } from 'react';
import React from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import type { Game } from '@/models/Game/types';
import { CarouselContainer, Container, Photo } from './styles';

export type Props = {
  gameDetails: Game
};
const GameImages: FC<Props> = ({ gameDetails }) => {
  const handleRenderImage = () => gameDetails.photos.map((gameImage) => (
    <Photo>
      <Image src={gameImage} fill alt="No hay imagen" />
    </Photo>
  ));
  return (
    <Container>
      <CarouselContainer>
        <Carousel axis="horizontal" infiniteLoop centerMode showThumbs={false} swipeable showArrows width="100%" dynamicHeight>
          {handleRenderImage()}
        </Carousel>
      </CarouselContainer>
    </Container>
  );
};

export default GameImages;
