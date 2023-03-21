import React from 'react';
import {
  Container, QuestionAnswer, Questions, QuestionTitle,
} from './styles';

const FaqSection = () => (
  <Container>
    <h1>FAQ</h1>
    <Questions>
      <QuestionTitle>¿Qué es un Trail?</QuestionTitle>
      <QuestionAnswer>
        Un trail es una lista secuencial de videojuegos o una hoja de ruta que se puede seguir para alcanzar un objetivo específico.
        ¿Alguna vez has querido empezar una saga de videojuegos cooperativo?¿Completar todos los logros/trofeos de una saga en concreto?
        o ¿Simplemente quieres jugar a un juego o a varios juegos, pero no tienes con quien? Pues con los trails puedes hacerlo,
        son una herramienta útil para compartir experiencias de juego y conectarse con otros jugadores que estén interesados en
        los mismos juegos y géneros.
      </QuestionAnswer>

      <QuestionTitle>¿Puedo mantener un registro de mis juegos?</QuestionTitle>
      <QuestionAnswer>
        Sí, puedes crear una cuenta y añadir tus juegos favoritos a tus listas, así como crear tus
        propios trails y compartirlos con la comunidad. Además, puedes mantener un registro de donde te encuentras en cada trail
        y de los juegos que vas completando.
      </QuestionAnswer>

      <QuestionTitle>¿Cómo puedo interactuar con los usuarios?</QuestionTitle>
      <QuestionAnswer>
        Puedes seguir a otros usuarios y ver sus trails, listas y juegos favoritos y puntuarles con nuestro novedoso sistema de puntuación.
        Nuestro sistema de karma se basa en 5 métricas diferentes y que te permiten ver la reputación de los usuarios: Amabilidad, habilidad,
        disponibilidad, diversión y juego en equipo.
      </QuestionAnswer>

      <QuestionTitle>¿Me puedo unir a cualquier trail?</QuestionTitle>
      <QuestionAnswer>
        Sí, puedes unirte a cualquier trail que te interese, siempre y cuando el creador del trail lo permita.
      </QuestionAnswer>

      <QuestionTitle>¿Puedo abandonar un trail?</QuestionTitle>
      <QuestionAnswer>
        Sí, puedes abandonar un trail en cualquier momento, dejando tu hueco libre para un nuevo interesado.
      </QuestionAnswer>

    </Questions>
  </Container>
);

export default FaqSection;
