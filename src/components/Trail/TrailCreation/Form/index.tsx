'use client';

import type { FC } from 'react';
import { useCallback, useEffect, useState } from 'react';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useRouter } from 'next/router';
import Select from 'react-select';
import CreateLottie from '@/components/Lotties/Landing/CreateLottie';
import {
  Button,
  DateFieldContainer,
  Form,
  Input,
  InputDate,
  InputTextArea,
  Label,
  PlanInfoToast,
  PremiumFilterFirst,
  PremiumFilterSecond,
  SelectorStyles,
  Title,
  ErrorContainer,
} from '@/components/Trail/TrailCreation/Form/styles';
import type { Game } from '@/models/Game/types';
import type { Trail } from '@/models/Trail/types';
import { getUserCookie } from '@/utils/login';

export type Props = {
  handleSetLoading: (value: boolean) => void
};

const TrailCreationForm: FC<Props> = ({ handleSetLoading }) => {
  // const router = useRouter();
  const [trailName, setTrailName] = useState('');
  const [trailDescription, setTrailDescription] = useState('');
  const [trailStartDate, setTrailStartDate] = useState('');
  const [trailEndDate, setTrailEndDate] = useState('');
  const [trailMaxNumber, setTrailMaxNumber] = useState('2');

  const [userKindness, setUserKindness] = useState('1');
  const [userFunny, setUserFunny] = useState('1');
  const [userTeamwork, setUserTeamwork] = useState('1');
  const [userAbility, setUserAbility] = useState('1');
  const [userAvailability, setUserAvailability] = useState('1');
  const user = getUserCookie();
  const token = user?.token;
  const [formError, setFormError] = useState('');

  const handlePremiumFilters = useCallback(async (formData: any, size:number) => {
    if (formData.get('kindness') > 1) {
      const kindnessData = {
        trail: size.toString(),
        user: user?.id.toString(),
        minRating: formData.get('kindness'),
        type: 'KINDNESS',
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
    if (formData.get('funny') > 1) {
      const funnyData = {
        trail: size.toString(),
        user: user?.id.toString(),
        minRating: formData.get('funny'),
        type: 'FUNNY',
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
    if (formData.get('teamwork') > 1) {
      const teamworkData = {
        trail: size.toString(),
        user: user?.id.toString(),
        minRating: formData.get('teamwork'),
        type: 'TEAMWORK',
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
    if (formData.get('ability') > 1) {
      const abilityData = {
        trail: size.toString(),
        user: user?.id.toString(),
        minRating: formData.get('ability'),
        type: 'ABILITY',
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

    if (formData.get('availability') > 1) {
      const availabilityData = {
        trail: size.toString(),
        user: user?.id.toString(),
        minRating: formData.get('availability'),
        type: 'AVAILABILITY',
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
  }, [user, token]);

  const [games, setGames] = useState<Game[]>([]);

  async function fetchGames() {
    const res = await fetch('https://gametrail-backend-production-8fc0.up.railway.app/api/game/');
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
      return await fetch('https://gametrail-backend-production-8fc0.up.railway.app/api/gameInTrail', {
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSetLoading(true);

    try {
      const requestData = {
        name: trailName,
        description: trailDescription,
        startDate: trailStartDate,
        finishDate: trailEndDate,
        maxPlayers: trailMaxNumber,
        owner: user?.id.toString(),
      };

      const response = await fetch('https://gametrail-backend-production-8fc0.up.railway.app/api/trail/', {
        method: 'POST',
        body: JSON.stringify(requestData),
        headers: { Authorization: `Token ${token}`, 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        const err = await response.json();
        setFormError(err[0]);
        return;
      }
      const res = await fetch('https://gametrail-backend-production-8fc0.up.railway.app/api/getTrail/');
      const data: [Trail] = await res.json();
      const trailId = data[data.length - 1].id;

      const form = e.currentTarget;
      const formData = new FormData(form);
      const selectedGames = formData.getAll('games');
      await Promise.all(selectedGames.map((game) => putGame(game, trailId, selectedGames)));

      if (user?.plan === 'Premium') {
        const filtersData = {
          kindness: userKindness,
          funny: userFunny,
          teamwork: userTeamwork,
          ability: userAbility,
          availability: userAvailability,
        };
        await handlePremiumFilters(filtersData, trailId);
      }
      setFormError('');
    } catch (error) {
      setFormError('Error de validación');
    } finally {
      handleSetLoading(false);
    }
  };

  return (
    <>
      <CreateLottie />
      <Form onSubmit={handleSubmit}>
        <Title>
          Crea un nuevo Trail
        </Title>
        {!!formError && <ErrorContainer>{formError}</ErrorContainer>}
        <Label>
          Nombre del Trail
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Ponle nombre a tu trail"
            value={trailName}
            onChange={(e) => setTrailName(e.target.value)}
          />
        </Label>
        <Label>
          Descripción
          <InputTextArea
            name="description"
            id="description"
            placeholder="Escribe una descripciñon para este Trail. 140 Caracteres máximo"
            value={trailDescription}
            onChange={(e) => setTrailDescription(e.target.value)}
          />
        </Label>
        <PlanInfoToast>
          Si eres un usuario estandar, tus trails solo pondrán durar 7 días.
        </PlanInfoToast>
        <DateFieldContainer>
          <Label>
            Fecha de Inicio
            <InputDate
              type="date"
              name="start-date"
              id="start-date"
              value={trailStartDate}
              onChange={(e) => setTrailStartDate(e.target.value)}
            />
          </Label>
          <Label>
            Fecha de Fin
            <InputDate
              type="date"
              name="end-date"
              id="end-date"
              value={trailEndDate}
              onChange={(e) => setTrailEndDate(e.target.value)}
            />
          </Label>
        </DateFieldContainer>
        <PlanInfoToast>
          Si eres un usuario estandar, solo puedes tener 4 jugadores por Trail.
        </PlanInfoToast>
        <Label>
          Número Máximo de Jugadores
          <Input
            type="number"
            name="max-players"
            id="max-players"
            min={1}
            defaultValue={2}
            value={trailMaxNumber}
            onChange={(e) => setTrailMaxNumber(e.target.value)}
          />
        </Label>

        {user?.plan === 'Premium' && (
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
        )}

        <Label htmlFor="games">
          Juegos que se van a Jugar
          <Select isMulti name="games" options={games} getOptionLabel={(option: Game) => option.name} getOptionValue={(option: Game) => option.id.toString()} styles={SelectorStyles} placeholder="Selecciona los juegos que quieras..." />
        </Label>
        <Button type="submit">Create</Button>
      </Form>
    </>
  );
};

export default TrailCreationForm;
