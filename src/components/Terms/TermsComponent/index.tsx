import React from 'react';
import {
  Container, Title, Text, Subtitle, Li, Ul, Strong,
} from './styles';

const Terms = () => (
  <Container>
    <Title>Terminos y condiciones de uso</Title>
    <Text>Última actualización: 7 de abril de 2023</Text>
    <Text>
      Al acceder y utilizar GameTrail, aceptas los siguientes términos y condiciones:
      <Ul>
        <Li>
          Toda la información y contenido en la plataforma de GameTrail es propiedad exclusiva de GameTrail y está protegido por las leyes de propiedad intelectual. Está prohibido copiar, distribuir o utilizar cualquier contenido sin la autorización previa por escrito de GameTrail.
        </Li>
      </Ul>
      <Ul>
        <Li>
          GameTrail se reserva el derecho de modificar o interrumpir la plataforma en cualquier momento y sin previo aviso.
        </Li>
      </Ul>
      <Ul>
        <Li>
          GameTrail no se hace responsable del contenido generado por los usuarios y se reserva el derecho de eliminar cualquier contenido que consideremos inapropiado o que viole nuestros términos y condiciones.
        </Li>
      </Ul>
      <Ul>
        <Li>
          Los usuarios son responsables del contenido que publiquen en la plataforma, incluyendo las valoraciones de otros usuarios, y aceptan que no deben publicar ningún contenido que sea ilegal, difamatorio, abusivo, obsceno, amenazante o que infrinja los derechos de propiedad intelectual de terceros.
        </Li>
      </Ul>
      <Ul>
        <Li>
          GameTrail se reserva el derecho de suspender o eliminar la cuenta de cualquier usuario que incumpla los términos y condiciones.
        </Li>
      </Ul>
    </Text>
    <Subtitle>Contacto</Subtitle>
    <Text>Si tienes alguna pregunta sobre esta Política de Privacidad, puedes contactarnos:</Text>
    <Ul>
      <Strong>help.gametrail@gmail.com</Strong>
    </Ul>
  </Container>
);

export default Terms;
