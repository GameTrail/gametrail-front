import type { FC } from 'react';
import React from 'react';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Input, Label, PremiumFilterFirst, PremiumFilterSecond,
} from './styles';

interface Props {
  useramabilidad: string;
  userFunny: string;
  userTeamwork: string;
  userAbility: string;
  userAvailhabilidad: string;
  setUseramabilidad: (value: string) => void;
  setUserFunny: (value: string) => void;
  setUserTeamwork: (value: string) => void;
  setUserAbility: (value: string) => void;
  setUserAvailhabilidad: (value: string) => void;
}

const PremiumFilters: FC<Props> = ({
  useramabilidad,
  userFunny,
  userTeamwork,
  userAbility,
  userAvailhabilidad,
  setUseramabilidad,
  setUserFunny,
  setUserTeamwork,
  setUserAbility,
  setUserAvailhabilidad,
}) => (
  <>
    <FontAwesomeIcon icon={faCrown} size="xs" />
    <h3>Filtros premium</h3>
    <h5> Establece valoraciones mínimas para limitar la unión de usuarios.</h5>
    <PremiumFilterFirst>

      <Label>
        Amabilidad
        <Input
          type="number"
          name="amabilidad"
          id="amabilidad"
          max={5}
          min={1}
          defaultValue={1}
          value={useramabilidad}
          onChange={(e) => setUseramabilidad(e.target.value)}
        />
      </Label>

      <Label>
        Diversión
        <Input
          type="number"
          name="diversion"
          id="diversion"
          max={5}
          min={1}
          defaultValue={1}
          value={userFunny}
          onChange={(e) => setUserFunny(e.target.value)}
        />
      </Label>

      <Label>
        Cooperación
        <Input
          type="number"
          name="teamwork"
          id="teamwork"
          max={5}
          min={1}
          value={userTeamwork}
          onChange={(e) => setUserTeamwork(e.target.value)}
        />
      </Label>

    </PremiumFilterFirst>

    <PremiumFilterSecond>

      <Label>
        Habilidad
        <Input
          type="number"
          name="habilidad"
          id="habilidad"
          max={5}
          min={1}
          defaultValue={1}
          value={userAbility}
          onChange={(e) => setUserAbility(e.target.value)}
        />
      </Label>

      <Label>
        Disponibilidad
        <Input
          type="number"
          name="availhabilidad"
          id="availhabilidad"
          max={5}
          min={1}
          defaultValue={1}
          value={userAvailhabilidad}
          onChange={(e) => setUserAvailhabilidad(e.target.value)}
        />
      </Label>

    </PremiumFilterSecond>
  </>
);

export default PremiumFilters;
