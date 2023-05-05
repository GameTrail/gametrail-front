import type { FC } from 'react';
import React from 'react';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DraggableRadar from '@/components/Trail/TrailCreation/PremiumFilters/DraggableRadar';
import useLanguage from '@/i18n/hooks';
import {
  CrownContainer,
  DescriptionContainer,
  Input, Label, MotionPremiumContainer, PremiumFilterFirst, PremiumInfo, PremiumRadar, TitlePremium,
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

  // Used so Draggable Radar can change the values of the Premium Filters
  const handleInputChange = (index:any, value:any) => {
    let newValue = value;
    if (value < 1) {
      newValue = 1;
    }
    if (value > 5) {
      newValue = 5;
    }
    switch (index) {
      case 0:
        setUseramabilidad(newValue);
        break;
      case 1:
        setUserFunny(newValue);
        break;
      case 2:
        setUserTeamwork(newValue);
        break;
      case 3:
        setUserAbility(newValue);
        break;
      case 4:
        setUserAvailhabilidad(newValue);
        break;
      default:
        break;
    }
  };

  // Data used for the Draggable Radar
  const radarData = {
    labels: [
      t('premium_filters_kindness'),
      t('premium_filters_fun'),
      t('premium_filters_cooperation'),
      t('premium_filters_ability'),
      t('premium_filters_availability'),
    ],
    datasets: [
      {
        data: [useramabilidad, userFunny, userTeamwork, userAbility, userAvailhabilidad],
        fill: true,
        backgroundColor: '#8fbcbb',
        borderColor: '#88c0d0',
        pointBackgroundColor: '#b48ead',
        pointBorderColor: '#eceff4',
        pointHoverBackgroundColor: '#eceff4',
        pointHoverBorderColor: '#b48ead',
        pointHoverRadius: 15,
        pointRadius: 5,
      },
    ],
  };

  return (
    <MotionPremiumContainer
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, type: 'spring', bounce: 0.25 }}
    >
      <PremiumInfo>
        <TitlePremium>{t('premium_filters')}</TitlePremium>
        <CrownContainer>
          <FontAwesomeIcon className="crown" icon={faCrown} />
        </CrownContainer>
      </PremiumInfo>
      <DescriptionContainer>
        {' '}
        {t('premium_filters_info')}
      </DescriptionContainer>

      <PremiumRadar>
        <DraggableRadar data={radarData} endDragFunction={handleInputChange} />
      </PremiumRadar>

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
      </PremiumFilterFirst>

    </MotionPremiumContainer>
  );
};

export default PremiumFilters;
