import type { FC } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import type { TrailGang as TrailGangProps } from '@/models/Trail/types';
import {
  CarouselContainer, Container, Title, CarouselImage,
} from './styles';

export type Props = {
  trailGangData: TrailGangProps;
};

const RecentGames: FC<Props> = ({ trailGangData }) => (
  <Container>
    <Title>Juegos recientemente añadidos</Title>
    <CarouselContainer>
      <Carousel axis="horizontal" autoPlay swipeable centerMode infiniteLoop showThumbs={false} showStatus={false} showIndicators={false} showArrows={false}>
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
  </Container>
);

export default RecentGames;
