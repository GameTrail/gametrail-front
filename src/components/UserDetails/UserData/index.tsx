import type { FC } from 'react';
import { useCallback, useMemo, useState } from 'react';

import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { User } from '@/models/User/types';
import { getUserCookie } from '@/utils/login';
import {
  Container, RateButton, RateContainer, RateLabel, RateButtonSubmit, RateInput, CloseRateContainer,
} from './styles';

export type Props = {
  user: User;
};
const UserData: FC<Props> = ({ user }) => {
  const [rate, setRenderRate] = useState<boolean>(false);
  const userWhoRates = getUserCookie();
  const token = userWhoRates?.token;
  const handleRateContainer = useCallback(() => {
    setRenderRate(!rate);
  }, [rate]);

  const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const requestData = {
      ratedUser: user.id,
      userWhoRate: userWhoRates?.id,
      rating: {
        FUNNY: formData.get('funny'),
        KINDNESS: formData.get('kindness'),
        ABILITY: formData.get('ability'),
        AVAILABILITY: formData.get('availability'),
        TEAMWORK: formData.get('teamwork'),
      },
    };
    try {
      const res = await fetch('https://gametrail-backend-production.up.railway.app/api/rating', {
        method: 'POST',
        body: JSON.stringify(requestData),
        headers: { Authorization: `Token ${token}`, 'Content-Type': 'application/json' },
      });

      if (!res.ok) {
        throw new Error(res.statusText);
      }
    } catch (error) {
      throw new Error();
    }
    handleRateContainer();
    window.location.reload();
  }, [handleRateContainer, token, user.id, userWhoRates?.id]);

  const handleRenderRate = useMemo(() => {
    if (rate) {
      return (
        <RateContainer onSubmit={handleSubmit}>
          <CloseRateContainer onClick={handleRateContainer}>X</CloseRateContainer>
          <h2>Valorar usuario</h2>
          <RateLabel htmlFor="KINDNESS">Amabilidad</RateLabel>
          <RateInput type="number" id="kindness" name="kindness" min="1" max="5" defaultValue={5} />
          <RateLabel htmlFor="ABILITY">Habilidad</RateLabel>
          <RateInput type="number" id="ability" name="ability" min="1" max="5" defaultValue={5} />
          <RateLabel htmlFor="AVAILABILITY">Disponibilidad</RateLabel>
          <RateInput type="number" id="availability" name="availability" min="0" max="5" defaultValue={5} />
          <RateLabel htmlFor="FUNNY">Diversión</RateLabel>
          <RateInput type="number" id="funny" name="funny" min="1" max="5" defaultValue={5} />
          <RateLabel htmlFor="TEAMWORK">Cooperación</RateLabel>
          <RateInput type="number" id="teamwork" name="teamwork" min="1" max="5" defaultValue={5} />
          <RateButtonSubmit type="submit">Enviar</RateButtonSubmit>
        </RateContainer>
      );
    }
    return null;
  }, [handleRateContainer, handleSubmit, rate]);

  return (
    <>
      <Container>
        <img src={user.avatar} alt={user.username} width={150} height={150} />
        <h1>
          @
          {user.username}
          {' '}
          {user.plan === 'Premium' && (
            <FontAwesomeIcon icon={faCrown} size="xs" />
          )}
        </h1>
        {user.plan === 'PACO' && (
          <RateButton onClick={handleRateContainer}>Valorar</RateButton>
        )}
      </Container>
      {handleRenderRate}
    </>
  );
};

export default UserData;
