import type { FC } from 'react';
import Image from 'next/image';
import { Carousel } from 'react-bootstrap';

import type { TrailGang as TrailGangProps } from '@/models/Trail/types';
import { Container, ContainerAux, Title } from './styles';

export type Props = {
  trailGang: TrailGangProps;
};

const RecentGames: FC<Props> = ({ trailGang }) => (
  <Container>
    <Title>Juegos recientemente añadidos</Title>
    <ContainerAux>
      <Carousel interval={null} slide indicators={false}>
        <Image
          src={trailGang.image}
          alt="Imagen 1"
          width={200}
          height={300}
        />
        <Image
          src={trailGang.image}
          alt="Imagen 2"
          width={200}
          height={300}
        />
        <Image
          src={trailGang.image}
          alt="Imagen 1"
          width={200}
          height={300}
        />
        <Image
          src={trailGang.image}
          alt="Imagen 2"
          width={200}
          height={300}
        />
        <Image
          src={trailGang.image}
          alt="Imagen 1"
          width={200}
          height={300}
        />
        <Image
          src={trailGang.image}
          alt="Imagen 2"
          width={200}
          height={300}
        />
        <Image
          src={trailGang.image}
          alt="Imagen 1"
          width={200}
          height={300}
        />
      </Carousel>
    </ContainerAux>
  </Container>
);

export default RecentGames;
