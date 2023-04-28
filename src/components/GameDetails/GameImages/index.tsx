import type { FC } from 'react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import type { Game } from '@/models/Game/types';
import { convertToArray } from '@/utils/convertToArray';
import { normalizeImage } from '@/utils/normalizeImage';
import { CarouselContainer, Container, Photo } from './styles';

export type Props = {
  gameDetails: Game
};
const GameImages: FC<Props> = ({ gameDetails }) => {
  const photos = convertToArray(gameDetails.photos);
  const handleRenderImage = () => photos.map((gameImage: string) => (
    <Photo key={photos.indexOf(gameImage)}>
      <img src={normalizeImage(gameImage)} alt="No hay imagen" />
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
