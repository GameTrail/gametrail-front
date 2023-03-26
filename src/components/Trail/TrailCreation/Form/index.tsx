'use client';

import type { FC } from 'react';
import { useCallback } from 'react';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import {
  Button,
  ButtonRow,
  DateFieldContainer,
  FieldContainer, Form,
  Input,
  InputDate,
  InputTextArea,
  Label,
  PremiumFilterFirst,
  PremiumFilterSecond,
} from '@/components/Trail/TrailCreation/Form/styles';

export type Props = {
  handleSetLoading: (value: boolean) => void
};

const TrailCreationForm: FC<Props> = ({ handleSetLoading }) => {
  const router = useRouter();
  // const { user, token } = useGameTrail();
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const token = localStorage.getItem('token');

  const handlePremiumFilters = useCallback(async (formData: any, size:number) => {
    if (formData.get('kindness') > 1) {
      const kindnessData = {
        trail: size,
        user: user?.id,
        minRating: formData.get('kindness'),
        type: 'kindness',
      };
      const resRatingKindness = await fetch('https://gametrail-backend-production.up.railway.app/api/minRating/', {
        method: 'POST',
        body: JSON.stringify(kindnessData),
        headers: { Authorization: `Token ${token}`, 'Content-Type': 'application/json' },
      });
      if (!resRatingKindness.ok) {
        throw new Error(resRatingKindness.statusText);
      }
    }
    if (formData.get('funny') > 1) {
      const funnyData = {
        trail: size,
        user: user?.id,
        minRating: formData.get('funny'),
        type: 'funny',
      };
      const resRatingFunny = await fetch('https://gametrail-backend-production.up.railway.app/api/minRating/', {
        method: 'POST',
        body: JSON.stringify(funnyData),
        headers: { Authorization: `Token ${token}`, 'Content-Type': 'application/json' },
      });
      if (!resRatingFunny.ok) {
        throw new Error(resRatingFunny.statusText);
      }
    }
    if (formData.get('teamwork') > 1) {
      const teamworkData = {
        trail: size,
        user: user?.id,
        minRating: formData.get('teamwork'),
        type: 'teamwork',
      };
      const resRatingTeamwork = await fetch('https://gametrail-backend-production.up.railway.app/api/minRating/', {
        method: 'POST',
        body: JSON.stringify(teamworkData),
        headers: { Authorization: `Token ${token}`, 'Content-Type': 'application/json' },
      });
      if (!resRatingTeamwork.ok) {
        throw new Error(resRatingTeamwork.statusText);
      }
    }
    if (formData.get('ability') > 1) {
      const abilityData = {
        trail: size,
        user: user?.id,
        minRating: formData.get('ability'),
        type: 'ability',
      };
      const resRatingAbility = await fetch('https://gametrail-backend-production.up.railway.app/api/minRating/', {
        method: 'POST',
        body: JSON.stringify(abilityData),
        headers: { Authorization: `Token ${token}`, 'Content-Type': 'application/json' },
      });
      if (!resRatingAbility.ok) {
        throw new Error(resRatingAbility.statusText);
      }
    }

    if (formData.get('availability') > 1) {
      const availabilityData = {
        trail: size,
        user: user?.id,
        minRating: formData.get('availability'),
        type: 'availability',
      };
      const resRatingAvailability = await fetch('https://gametrail-backend-production.up.railway.app/api/minRating/', {
        method: 'POST',
        body: JSON.stringify(availabilityData),
        headers: { Authorization: `Token ${token}`, 'Content-Type': 'application/json' },
      });
      if (!resRatingAvailability.ok) {
        throw new Error(resRatingAvailability.statusText);
      }
    }
  }, [user, token]);

  const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    handleSetLoading(true);
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const requestData = {
      name: formData.get('name'),
      description: formData.get('description'),
      startDate: formData.get('start-date'),
      finishDate: formData.get('end-date'),
      maxPlayers: formData.get('max-players'),
      owner: '1',
    };
    try {
      const res = await fetch('https://gametrail-backend-production.up.railway.app/api/trail/', {
        method: 'POST',
        body: JSON.stringify(requestData),
        headers: { Authorization: `Token ${token}`, 'Content-Type': 'application/json' },
      });

      if (!res.ok) {
        throw new Error(res.statusText);
      }
    } catch (error) {
      throw new Error();
    } finally {
      const res = await fetch('https://gametrail-backend-production.up.railway.app/api/trail/');
      const data: [] = await res.json();
      const size = data.length;

      if (user?.plan === 'PREMIUM') {
      // await handlePremiumFilters(formData, size);
      }
      router.push(`/trail/${size}`);
      handleSetLoading(false);
    }
  }, [handleSetLoading, router]);

  return (
    <Form onSubmit={handleSubmit}>
      <FieldContainer>
        <Label htmlFor="name">Nombre del Trail</Label>
        <Input type="text" name="name" id="name" />
      </FieldContainer>

      <FieldContainer>
        <Label htmlFor="description">Descripción</Label>
        <InputTextArea name="description" id="description" />
      </FieldContainer>

      <DateFieldContainer>
        <FieldContainer>
          <Label htmlFor="start-date">Fecha de Inicio</Label>
          <InputDate type="date" name="start-date" id="start-date" />
        </FieldContainer>

        <FieldContainer>
          <Label htmlFor="end-date">Fecha de Fin</Label>
          <InputDate type="date" name="end-date" id="end-date" />
        </FieldContainer>
      </DateFieldContainer>
      <FieldContainer>
        <Label htmlFor="max-players">Número Máximo de Jugadores</Label>
        <Input type="number" name="max-players" id="max-players" min={1} defaultValue={1} />
      </FieldContainer>
      {user?.plan === 'PREMIUM' && (
      <>
        <FontAwesomeIcon icon={faCrown} size="xs" />
        <h3>Filtros premium</h3>
        <h5> Establece valoraciones mínimas para limitar la unión de usuarios.</h5>
        <PremiumFilterFirst>
          <FieldContainer>
            <Label htmlFor="min-rating-kindness">Amabilidad </Label>
            <Input type="number" name="kindness" id="kindness" max={5} min={1} defaultValue={1} />
          </FieldContainer>

          <FieldContainer>
            <Label htmlFor="min-rating-funny">Diversión </Label>
            <Input type="number" name="funny" id="funny" max={5} min={1} defaultValue={1} />
          </FieldContainer>

          <FieldContainer>
            <Label htmlFor="min-rating-teamwork">Cooperación </Label>
            <Input type="number" name="teamwork" id="teamwork" max={5} min={1} defaultValue={1} />
          </FieldContainer>
        </PremiumFilterFirst>
        <PremiumFilterSecond>
          <FieldContainer>
            <Label htmlFor="min-rating-ability">Habilidad </Label>
            <Input type="number" name="ability" id="ability" max={5} min={1} defaultValue={1} />
          </FieldContainer>

          <FieldContainer>
            <Label htmlFor="min-rating-availability">Disponibilidad </Label>
            <Input type="number" name="availability" id="availability" max={5} min={1} defaultValue={1} />
          </FieldContainer>
        </PremiumFilterSecond>
      </>
      )}

      <ButtonRow>
        <Button type="submit">Create</Button>
      </ButtonRow>
    </Form>
  );
};

export default TrailCreationForm;
