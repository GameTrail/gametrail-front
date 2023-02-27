import React from 'react';
import {
  Container, QuestionAnswer, Questions, QuestionTitle,
} from './styles';

const FaqSection = () => (
  <Container>
    <h1>FAQ</h1>
    <Questions>
      <QuestionTitle>¿Que es un Trail?</QuestionTitle>
      <QuestionAnswer>
        Un Trail es una experiencia que compartes con tus amigos, es una forma de compartir tus
        experiencias en videojuegos.
      </QuestionAnswer>
      <QuestionTitle>¿Que ventajas tiene el plan Premium?</QuestionTitle>
      <QuestionAnswer>
        Con  el plan Premium puedes crear Trails ilimitados, puedes crear Trails privados y
        puedes crear Trails con mas de 5 amigos.
      </QuestionAnswer>
    </Questions>
  </Container>
);

export default FaqSection;
