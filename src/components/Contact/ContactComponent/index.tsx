import React from 'react';
import { ContactLottie } from '@/components/Lotties';
import {
  Container, Title, Text, Strong,
} from './styles';

const Contact = () => (
  <Container>
    <ContactLottie />
    <Title>¡Contacta con nosotros!</Title>
    <Text> Si tienes alguna duda, sugerencia o quieres saber algo mas sobre nosotros no dudes en contactar con nosotros mediante el siguiente correo:</Text>
    <Strong> help.user.gametrail@gmail.com </Strong>
  </Container>
);

export default Contact;
