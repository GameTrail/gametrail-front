import type { FC } from 'react';
import React from 'react';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Input, Label, PremiumFilterFirst, PremiumFilterSecond,
} from './styles';

interface Props {
  userKindness: string;
  userFunny: string;
  userTeamwork: string;
  userAbility: string;
  userAvailability: string;
  setUserKindness: (value: string) => void;
  setUserFunny: (value: string) => void;
  setUserTeamwork: (value: string) => void;
  setUserAbility: (value: string) => void;
  setUserAvailability: (value: string) => void;
}

const PremiumFilters: FC<Props> = ({
  userKindness,
  userFunny,
  userTeamwork,
  userAbility,
  userAvailability,
  setUserKindness,
  setUserFunny,
  setUserTeamwork,
  setUserAbility,
  setUserAvailability,
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
          name="kindness"
          id="kindness"
          max={5}
          min={1}
          defaultValue={1}
          value={userKindness}
          onChange={(e) => setUserKindness(e.target.value)}
        />
      </Label>

      <Label>
        Diversión
        <Input
          type="number"
          name="funny"
          id="funny"
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
          name="ability"
          id="ability"
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
          name="availability"
          id="availability"
          max={5}
          min={1}
          defaultValue={1}
          value={userAvailability}
          onChange={(e) => setUserAvailability(e.target.value)}
        />
      </Label>

    </PremiumFilterSecond>
  </>
);

export default PremiumFilters;
