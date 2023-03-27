'use client';

import type { FC } from 'react';
import { useCallback, useEffect, useState } from 'react';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import Select from 'react-select';
import {
  Button,
  ButtonRow,
  DateFieldContainer,
  FieldContainer,
  Form,
  Input,
  InputDate,
  InputTextArea,
  Label,
  PremiumFilterFirst,
  PremiumFilterSecond,
  SelectorStyles,
} from '@/components/Trail/TrailCreation/Form/styles';
import type { Game } from '@/models/Game/types';
import type { Trail } from '@/models/Trail/types';
import { getUserCookie } from '@/utils/login';

export type Props = {
  handleSetLoading: (value: boolean) => void
};

const TrailCreationForm: FC<Props> = ({ handleSetLoading }) => {

  const router = useRouter();
  const user = getUserCookie();
  const token = user?.token;

  const handlePremiumFilters = useCallback(async (formData: any, size:number) => {
    if (formData.get('kindness') > 1) {
      const kindnessData = {
        trail: size.toString(),
        user: user?.id.toString(),
        minRating: formData.get('kindness'),
        type: 'KINDNESS',
      };
      const resRatingKindness = await fetch('https://gametrail-backend-production.up.railway.app/api/createMinRating', {
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
    if (formData.get('funny') > 1) {
      const funnyData = {
        trail: size.toString(),
        user: user?.id.toString(),
        minRating: formData.get('funny'),
        type: 'FUNNY',
      };
      const resRatingFunny = await fetch('https://gametrail-backend-production.up.railway.app/api/createMinRating', {
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
    if (formData.get('teamwork') > 1) {
      const teamworkData = {
        trail: size.toString(),
        user: user?.id.toString(),
        minRating: formData.get('teamwork'),
        type: 'TEAMWORK',
      };
      const resRatingTeamwork = await fetch('https://gametrail-backend-production.up.railway.app/api/createMinRating', {
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
    if (formData.get('ability') > 1) {
      const abilityData = {
        trail: size.toString(),
        user: user?.id.toString(),
        minRating: formData.get('ability'),
        type: 'ABILITY',
      };
      const resRatingAbility = await fetch('https://gametrail-backend-production.up.railway.app/api/createMinRating', {
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

    if (formData.get('availability') > 1) {
      const availabilityData = {
        trail: size.toString(),
        user: user?.id.toString(),
        minRating: formData.get('availability'),
        type: 'AVAILABILITY',
      };
      const resRatingAvailability = await fetch('https://gametrail-backend-production.up.railway.app/api/createMinRating', {
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
  }, [user, token]);

  const [games, setGames] = useState<Game[]>([]);

  async function fetchGames() {
    const res = await fetch('https://gametrail-backend-production.up.railway.app/api/game/');
    const data: Game[] = await res.json();
    setGames(data);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function putGame(game: FormDataEntryValue, trailId: number, selectedGames: FormDataEntryValue[]) {
    const gameData = {
      trail: trailId.toString(),
      game: game.toString(),
      priority: (selectedGames.indexOf(game) + 1),
      message: 'Pendiente de selección',
      status: 'PENDING',
    };

    try {
      return await fetch('https://gametrail-backend-production.up.railway.app/api/gameInTrail', {
        method: 'POST',
        body: JSON.stringify(gameData),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        },
      });
    } catch (error) {
      throw new Error();
    }
  }

  useEffect(() => {
    fetchGames().then((r) => r);
  }, []);

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
      owner: user?.id.toString(),
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
      const res = await fetch('https://gametrail-backend-production.up.railway.app/api/getTrail/');
      const data: [Trail] = await res.json();
      const trailId = data[data.length - 1].id;

      if (user?.plan === 'PREMIUM') {
        await handlePremiumFilters(formData, trailId);
      }

      const selectedGames = formData.getAll('games');
      selectedGames.forEach((game) => {
        putGame(game, trailId, selectedGames).then((r) => r);
      });

      router.push(`/trail/${trailId}`);
      handleSetLoading(false);
    }
  }, [handlePremiumFilters, handleSetLoading, putGame, router, token, user?.id, user?.plan]);

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

      <FieldContainer>
        <Label htmlFor="games">Juegos que se van a Jugar</Label>
        <Select isMulti name="games" options={games} getOptionLabel={(option: Game) => option.name} getOptionValue={(option: Game) => option.id.toString()} styles={SelectorStyles} placeholder="Selecciona los juegos que quieras..." />
      </FieldContainer>

      <ButtonRow>
        <Button type="submit">Create</Button>
      </ButtonRow>
    </Form>
  );
};

export default TrailCreationForm;
