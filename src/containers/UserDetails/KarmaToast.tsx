import React from 'react';
import { KarmaInfoToast } from './styles';

const KarmaToast = () => (
  <KarmaInfoToast>
    <p>
      El karma mide la reputación de un usuario de GameTrail en base a 5 medidas:
      <br />
    </p>
    <ol>
      <li>
        <b>Amabilidad</b>
        {' '}
      </li>
      <li>
        <b>Habilidad</b>
        {' '}
      </li>
      <li>
        <b>Disponibilidad</b>
        {' '}
      </li>
      <li>
        <b>Diversión</b>
        {' '}
      </li>
      <li>
        <b>Cooperación</b>
        {' '}
      </li>
    </ol>
    <p>
      El karma corresponde a la valoración media de estas 5 métricas.
    </p>
  </KarmaInfoToast>
);

export default KarmaToast;
