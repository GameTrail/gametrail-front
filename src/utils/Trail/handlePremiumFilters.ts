import type { UserCookie } from '@/components/Login/LoginComponent/types';

export const handlePremiumFilters = async (formData: any, size: number, user: UserCookie, token: string | undefined) => {
  if (formData.get('kindness') !== '1') {
    const kindnessData = {
      trail: size.toString(),
      user: user?.id.toString(),
      minRating: formData.get('kindness'),
      ratingType: 'KINDNESS',
    };
    const resRatingKindness = await fetch('https://gametrail-backend-production-8fc0.up.railway.app/api/createMinRating', {
      method: 'POST',
      body: JSON.stringify(kindnessData),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
    });
    if (!resRatingKindness.ok) {
      throw new Error(resRatingKindness.statusText);
    }
  }
  if (formData.get('funny') !== '1') {
    const funnyData = {
      trail: size.toString(),
      user: user?.id.toString(),
      minRating: formData.get('funny'),
      ratingType: 'FUNNY',
    };
    const resRatingFunny = await fetch('https://gametrail-backend-production-8fc0.up.railway.app/api/createMinRating', {
      method: 'POST',
      body: JSON.stringify(funnyData),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
    });
    if (!resRatingFunny.ok) {
      throw new Error(resRatingFunny.statusText);
    }
  }
  if (formData.get('teamwork') !== '1') {
    const teamworkData = {
      trail: size.toString(),
      user: user?.id.toString(),
      minRating: formData.get('teamwork'),
      ratingType: 'TEAMWORK',
    };
    const resRatingTeamwork = await fetch('https://gametrail-backend-production-8fc0.up.railway.app/api/createMinRating', {
      method: 'POST',
      body: JSON.stringify(teamworkData),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
    });
    if (!resRatingTeamwork.ok) {
      throw new Error(resRatingTeamwork.statusText);
    }
  }
  if (formData.get('ability') !== '1') {
    const abilityData = {
      trail: size.toString(),
      user: user?.id.toString(),
      minRating: formData.get('ability'),
      ratingType: 'ABILITY',
    };
    const resRatingAbility = await fetch('https://gametrail-backend-production-8fc0.up.railway.app/api/createMinRating', {
      method: 'POST',
      body: JSON.stringify(abilityData),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
    });
    if (!resRatingAbility.ok) {
      throw new Error(resRatingAbility.statusText);
    }
  }

  if (formData.get('availability') !== '1') {
    const availabilityData = {
      trail: size.toString(),
      user: user?.id.toString(),
      minRating: formData.get('availability'),
      ratingType: 'AVAILABILITY',
    };
    const resRatingAvailability = await fetch('https://gametrail-backend-production-8fc0.up.railway.app/api/createMinRating', {
      method: 'POST',
      body: JSON.stringify(availabilityData),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
    });
    if (!resRatingAvailability.ok) {
      throw new Error(resRatingAvailability.statusText);
    }
  }
};
