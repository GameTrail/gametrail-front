import type { FC } from 'react';
import { useCallback, useMemo, useState } from 'react';

import { faCrown, faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import type { User } from '@/models/User/types';
import { getUserCookie } from '@/utils/login';
import {

  Container, RateButton, RateContainer, RateLabel, RateButtonSubmit, RateInput, CloseRateContainer, ErrorContainer,
} from './styles';

export type Props = {
  user: User;
};
const UserData: FC<Props> = ({ user }) => {
  const [rate, setRenderRate] = useState<boolean>(false);
  const [ratingError, setRatingError] = useState<boolean>(false);
  const userWhoRates = getUserCookie();
  const token = userWhoRates?.token;
  const handleRateContainer = useCallback(() => {
    setRenderRate(!rate);
  }, [rate]);

  const router = useRouter();

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
      const res = await fetch('https://gametrail-backend-production-8fc0.up.railway.app/api/rating', {
        method: 'POST',
        body: JSON.stringify(requestData),
        headers: { Authorization: `Token ${token}`, 'Content-Type': 'application/json' },
      });

      if (!res.ok) {
        throw new Error(res.statusText);
      }
    } catch (error) {
      setRatingError(true);
      throw new Error();
    }
    handleRateContainer();
    window.location.reload();
  }, [handleRateContainer, token, user.id, userWhoRates?.id]);

  const handleAlreadyVotedError = useMemo(() => {
    if (ratingError) {
      return (
        <ErrorContainer>Ya has valorado a este usuario</ErrorContainer>
      );
    }

    return null;
  }, [ratingError]);
  const handleRenderRate = useMemo(() => {
    if (rate) {
      return (
        <RateContainer onSubmit={handleSubmit}>
          <CloseRateContainer onClick={handleRateContainer}>X</CloseRateContainer>
          {handleAlreadyVotedError}
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
  }, [handleAlreadyVotedError, handleRateContainer, handleSubmit, rate]);

  const handleConfigProfile = useCallback(() => {
    router.push('/user/configuration');
  }, [router]);
  return (
    <>
      <Container>
        <img src={user.avatar} alt={user.username} width={150} height={150} />
        <h1>
          @
          {user.username}
          {' '}
          {user.plan === 'Premium' && (
            <FontAwesomeIcon icon={faCrown} className="crown" size="xs" />
          )}

          {user.id === userWhoRates?.id && (
            <FontAwesomeIcon icon={faGear} className="gear" onClick={handleConfigProfile} size="xs" />
          )}
        </h1>
        {user.id !== userWhoRates?.id && (
          <RateButton onClick={handleRateContainer}>Valorar</RateButton>
        )}

      </Container>
      {handleRenderRate}
    </>
  );
};

export default UserData;
