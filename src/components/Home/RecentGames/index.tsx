import type { FC } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import type { Game as GamesProps } from '@/models/Game/types';
import {
  CarouselContainer, Container, Title, CarouselImage,
} from './styles';

export type Props = {
  recentGames: GamesProps;
};

const RecentGames: FC<Props> = ({ recentGames }) => (
  <Container>
    <Title>Juegos recientemente añadidos</Title>
    <CarouselContainer>
      <Carousel axis="horizontal" autoPlay swipeable centerMode infiniteLoop showThumbs={false} showStatus={false} showIndicators={false} showArrows={false}>
        <CarouselImage
          src={recentGames.image}
          alt="Imagen 1"
          width={200}
          height={300}
        />
        <CarouselImage
          src={recentGames.image}
          alt="Imagen 2"
          width={200}
          height={300}
        />
        <CarouselImage
          src={recentGames.image}
          alt="Imagen 3"
          width={200}
          height={300}
        />
      </Carousel>
    </CarouselContainer>
  </Container>
);

export default RecentGames;
