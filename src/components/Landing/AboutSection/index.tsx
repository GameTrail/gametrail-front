import React from 'react';
import { PlayersLottie, SteamLottie, TodoListLottie } from '@/components/Lotties';
import {
  Container, Description, About, Title,
} from './styles';

const AboutSection = () => (
  <Container>
    <About>
      <div>
        <Title>Steam y Xbox Live</Title>
        <Description>
          Conecta tu cuenta de Steam y Xbox Live para actualizar el progreso de tus juegos y añadirlos a tus listas
        </Description>
      </div>
      <SteamLottie />
    </About>
    <About>
      <div>
        <Title>Trails personalizados</Title>
        <Description>
          Crea Trails personalizados para tus juegos y comparte la aventura con tus amigos o nuevas personas de la comunidad dispuestas a jugar contigo
        </Description>
      </div>
      <PlayersLottie />
    </About>
    <About>
      <div>
        <Title>Guarda tu progreso</Title>
        <Description>
          Gestiona el progreso de todos tus juegos y compartelos con la comunidad mediante tus propias listas personalizadas
        </Description>
      </div>
      <TodoListLottie />
    </About>
  </Container>
);

export default AboutSection;
