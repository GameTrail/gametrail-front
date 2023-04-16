import type { FC } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import useLanguage from '@/i18n/hooks';
import type { Game } from '@/models/Game/types';
import { normalizeImage } from '@/utils/normalizeImage';
import {
  CarouselContainer, Container, Title, CarouselImage, Description,
} from './styles';

export type Props = {
  recentGames: Game[];
};

const RecentGames:FC<Props> = ({ recentGames }) => {
  const { t } = useLanguage();
  const handleRenderGames = () => recentGames?.map((game) => (
    <CarouselImage
      src={normalizeImage(game.image)}
      alt={game.name}
      width={200}
      height={300}
    />
  ));
  return (
    <Container>
      <Title>{t('recent_games')}</Title>
      <CarouselContainer>
        <Carousel axis="horizontal" showThumbs={false} autoPlay swipeable centerMode infiniteLoop showStatus={false} showIndicators={false} showArrows={false}>
          {handleRenderGames()}
        </Carousel>
      </CarouselContainer>
      <Description>
        {t('recent_games_description')}
      </Description>
    </Container>
  );
};

export default RecentGames;
