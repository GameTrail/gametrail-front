import type { FC } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import type { Game } from '@/models/Game/types';
import {
  CarouselContainer, Container, Title, CarouselImage, Description,
} from './styles';

export type Props = {
  recentGames: Game[];
};

const RecentGames:FC<Props> = ({ recentGames }) => {
  const handleRenderGames = () => recentGames?.map((game) => (
    <CarouselImage
      src={game.image}
      alt={game.name}
      width={200}
      height={300}
    />
  ));
  return (
    <Container>
      <Title>Juegos Recientes</Title>
      <CarouselContainer>
        <Carousel axis="horizontal" autoPlay swipeable centerMode infiniteLoop showStatus={false} showIndicators={false} showArrows={false}>
          {handleRenderGames()}
        </Carousel>
      </CarouselContainer>
      <Description>
        Estos son los ultimos juegos añadidos a GameTrail.
        Si quieres acceder a todos ellos y añadirlos a tus Trails o listas usa nuestro buscador!!
      </Description>
    </Container>
  );
};

export default RecentGames;
