import type { FC } from 'react';
import React from 'react';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useLanguage from '@/i18n/hooks';
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
}) => {
  const { t } = useLanguage();
  return (
    <>
      <FontAwesomeIcon className="crown" icon={faCrown} size="xs" />
      <h3>{t('premium_filters')}</h3>
      <h5>
        {' '}
        {t('premium_filters_info')}
      </h5>
      <PremiumFilterFirst>

        <Label>
          {t('premium_filters_kindness')}
          <Input
            type="number"
            name="kindness"
            id="amabilidad"
            max={5}
            min={1}
            defaultValue={1}
            value={useramabilidad}
            onChange={(e) => setUseramabilidad(e.target.value)}
          />
        </Label>

        <Label>
          {t('premium_filters_fun')}
          <Input
            type="number"
            name="funny"
            id="diversion"
            max={5}
            min={1}
            defaultValue={1}
            value={userFunny}
            onChange={(e) => setUserFunny(e.target.value)}
          />
        </Label>

        <Label>
          {t('premium_filters_cooperation')}
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
          {t('premium_filters_skill')}
          <Input
            type="number"
            name="ability"
            id="habilidad"
            max={5}
            min={1}
            defaultValue={1}
            value={userAbility}
            onChange={(e) => setUserAbility(e.target.value)}
          />
        </Label>

        <Label>
          {t('premium_filters_availability')}
          <Input
            type="number"
            name="availability"
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
};

export default PremiumFilters;
