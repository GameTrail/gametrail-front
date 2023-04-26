import type { FC } from 'react';
import { useCallback, useMemo, useState } from 'react';

import { faCrown, faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import useLanguage from '@/i18n/hooks';
import type { User } from '@/models/User/types';
import { getUserCookie } from '@/utils/login';
import {

  Container, RateButton, RateContainer, RateLabel, RateButtonSubmit, RateInput, CloseRateContainer, ErrorContainer,
} from './styles';

export type Props = {
  user: User;
};
const UserData: FC<Props> = ({ user }) => {
  const { t } = useLanguage();
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
        <ErrorContainer>{t('rate_user_error-1')}</ErrorContainer>
      );
    }

    return null;
  }, [ratingError, t]);
  const handleRenderRate = useMemo(() => {
    if (rate) {
      return (
        <RateContainer onSubmit={handleSubmit}>
          <CloseRateContainer onClick={handleRateContainer}>X</CloseRateContainer>
          {handleAlreadyVotedError}
          <h2>{t('rate_user')}</h2>
          <RateLabel htmlFor="kindness">{t('premium_filters_kindness')}</RateLabel>
          <RateInput type="number" id="kindness" name="kindness" min="1" max="5" defaultValue={5} />
          <RateLabel htmlFor="ability">{t('premium_filters_skill')}</RateLabel>
          <RateInput type="number" id="ability" name="ability" min="1" max="5" defaultValue={5} />
          <RateLabel htmlFor="availability">{t('premium_filters_availability')}</RateLabel>
          <RateInput type="number" id="availability" name="availability" min="0" max="5" defaultValue={5} />
          <RateLabel htmlFor="funny">{t('premium_filters_fun')}</RateLabel>
          <RateInput type="number" id="funny" name="funny" min="1" max="5" defaultValue={5} />
          <RateLabel htmlFor="teamwork">{t('premium_filters_cooperation')}</RateLabel>
          <RateInput type="number" id="teamwork" name="teamwork" min="1" max="5" defaultValue={5} />
          <RateButtonSubmit type="submit">{t('send')}</RateButtonSubmit>
        </RateContainer>
      );
    }
    return null;
  }, [handleAlreadyVotedError, handleRateContainer, handleSubmit, rate, t]);

  const handleConfigProfile = useCallback(() => {
    router.push('/user/configuration');
  }, [router]);
  return (
    <Container>
      <img src={user.avatar} alt={user.username} width={150} height={150} />
      <h1>
        @
        {user.username}
        {' '}
        {user.plan === 'Premium' && (
        <FontAwesomeIcon icon={faCrown} data-testid="premium-icon" className="crown" size="xs" />
        )}

        {user.id === userWhoRates?.id && (
        <FontAwesomeIcon icon={faGear} data-testid="gear-icon" className="gear" onClick={handleConfigProfile} size="xs" />
        )}
      </h1>
      {user.id !== userWhoRates?.id && (
      <RateButton onClick={handleRateContainer}>Valorar</RateButton>
      )}
      {handleRenderRate}
    </Container>
  );
};

export default UserData;
