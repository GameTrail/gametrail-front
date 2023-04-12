import {
  useEffect, useState,
} from 'react';
import router from 'next/router';
import AsyncSelect from 'react-select/async';
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
  GamesSelectorStyles,
  Title,
  ErrorContainer,
} from '@/components/Trail/TrailCreation/Form/styles';
import type { Game } from '@/models/Game/types';
import { getUserCookie } from '@/utils/login';
import { handlePremiumFilters } from '@/utils/Trail/handlePremiumFilters';
import PremiumFilters from '../PremiumFilters';

const GAMES_URL = 'https://gametrail-backend-production-8fc0.up.railway.app/api/game/';

const TrailCreationForm = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [trailName, setTrailName] = useState('');
  const [trailDescription, setTrailDescription] = useState('');
  const [trailStartDate, setTrailStartDate] = useState('');
  const [trailEndDate, setTrailEndDate] = useState('');
  const [trailMaxNumber, setTrailMaxNumber] = useState(2);

  const [userKindness, setUserKindness] = useState('1');
  const [userFunny, setUserFunny] = useState('1');
  const [userTeamwork, setUserTeamwork] = useState('1');
  const [userAbility, setUserAbility] = useState('1');
  const [userAvailability, setUserAvailability] = useState('1');
  const user = getUserCookie();
  const token = user?.token;
  const [formError, setFormError] = useState<string[]>([]);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const startDate = new Date(trailStartDate);
    const endDate = new Date(trailEndDate);

    if (user?.plan !== 'PREMIUM' && (endDate.getTime() - startDate.getTime() > 7 * 86400000)) {
      setFormError((prevState) => [...prevState, 'La diferencia entre las fechas no puede ser mayor a 7 días']);
    }

    if (e.target.name === 'start-date') {
      setTrailStartDate(e.target.value);
    } else {
      setTrailEndDate(e.target.value);
    }
  };

  const createTrail = async () => {
    const requestData = {
      name: trailName,
      description: trailDescription,
      startDate: trailStartDate,
      finishDate: trailEndDate,
      maxPlayers: trailMaxNumber,
      owner: user?.id.toString(),
    };
    if (user?.plan !== 'PREMIUM' && trailMaxNumber > 4) {
      setFormError((prevState) => [...prevState, 'Si eres un usuario estandar, tus trails solo pueden tener 4 jugadores como máximo.']);
    }
    const res = await fetch('https://gametrail-backend-production-8fc0.up.railway.app/api/trail/', {
      method: 'POST',
      body: JSON.stringify(requestData),
      headers: { Authorization: `Token ${token}`, 'Content-Type': 'application/json' },
    });
    if (!res.ok) {
      setFormError(['Existe al menos un error en el formulario, comprueba los campos.']);
    }
    const data = await res.json();
    return data.id;
  };

  const putGame = async (game: FormDataEntryValue, trailId: number, selectedGames: FormDataEntryValue[]) => {
    const gameData = {
      trail: trailId.toString(),
      game: game.toString(),
      priority: (selectedGames.indexOf(game) + 1),
      message: 'Pendiente de selección',
      status: 'PENDING',
    };

    try {
      const res = await fetch('https://gametrail-backend-production-8fc0.up.railway.app/api/gameInTrail', {
        method: 'POST',
        body: JSON.stringify(gameData),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        },
      });
      if (!res.ok) {
        const errorData = await res.json() as { [key: string]: string[] };
        const errorMessages = Object.entries(errorData).flatMap(([key, errores]) => errores.map((error) => `${key}: ${error}`));
        setFormError(errorMessages);
      }
    } catch (error) {
      setFormError(['Ha ocurrido un error al añadir los juegos, pruebe de nuevo más tarde.']);
    }
  };

  const createTrailGames = async (formData: FormData, trailId: number) => {
    const selectedGames = formData.getAll('games');
    selectedGames.forEach(async (game) => {
      await putGame(game, trailId, selectedGames);
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const trailId = await createTrail();
    await createTrailGames(formData, trailId);
    if (user?.plan === 'Premium') await handlePremiumFilters(formData, trailId, user, token);

    router.push(`/user/${user?.id}`);
  };

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      try {
        const searchUrl = searchQuery.length > 1 ? `${GAMES_URL}?search=${searchQuery}` : GAMES_URL;
        const response = await fetch(searchUrl);
        const data = await response.json();
        setGames(data.results);
      } catch (err) {
        setFormError(['Ha ocurrido un error al cargar los juegos, pruebe de nuevo más tarde.']);
      } finally {
        setLoading(false);
      }
    };
    fetchGames();
  }, [searchQuery]);

  return (
    <>
      <CreateLottie />
      <Form onSubmit={handleSubmit}>
        <Title>
          Crea un nuevo Trail
        </Title>
        {formError.map((message) => (<ErrorContainer key={formError.indexOf(message)}>{message}</ErrorContainer>))}
        <Label>
          Nombre del Trail
          <Input
            required
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
            required
            name="description"
            id="description"
            placeholder="Escribe una descripción para este Trail. 140 Carácteres de máximo"
            value={trailDescription}
            maxLength={140}
            onChange={(e) => setTrailDescription(e.target.value)}
          />
        </Label>
        <PlanInfoToast>
          Si eres un usuario estandar, tus trails solo pondrán durar 7 días como máximo.
        </PlanInfoToast>
        <DateFieldContainer>
          <Label>
            Fecha de Inicio
            <InputDate
              required
              type="date"
              name="start-date"
              id="start-date"
              min={new Date().toISOString().split('T')[0]}
              value={trailStartDate}
              onChange={handleDateChange}
            />
          </Label>
          <Label>
            Fecha de Fin
            <InputDate
              required
              type="date"
              name="end-date"
              id="end-date"
              min={trailStartDate ? new Date(trailStartDate).toISOString().split('T')[0] : ''}
              value={trailEndDate}
              onChange={handleDateChange}
            />
          </Label>
        </DateFieldContainer>
        <PlanInfoToast>
          Si eres un usuario estandar, solo puedes tener 4 jugadores por Trail.
        </PlanInfoToast>
        <Label>
          Número Máximo de Jugadores
          <Input
            required
            type="number"
            name="max-players"
            id="max-players"
            min={1}
            value={trailMaxNumber}
            onChange={(e) => setTrailMaxNumber(e.target.valueAsNumber)}
          />
        </Label>

        {
          user?.plan === 'Premium' && (
            <PremiumFilters
              userTeamwork={userTeamwork}
              userAbility={userAbility}
              userKindness={userKindness}
              userFunny={userFunny}
              userAvailability={userAvailability}
              setUserTeamwork={setUserTeamwork}
              setUserAbility={setUserAbility}
              setUserKindness={setUserKindness}
              setUserFunny={setUserFunny}
              setUserAvailability={setUserAvailability}
            />
          )
        }

        <Label htmlFor="games">
          Juegos que se van a Jugar
          <AsyncSelect
            required
            isMulti
            isSearchable
            name="games"
            styles={GamesSelectorStyles}
            getOptionLabel={(option: Game) => option.name}
            getOptionValue={(option: Game) => option.id.toString()}
            isLoading={loading}
            onInputChange={(value) => setSearchQuery(value)}
            defaultOptions={games}
            loadOptions={async () => games}
          />
        </Label>
        <Button type="submit">Crear</Button>
      </Form>
    </>
  );
};

export default TrailCreationForm;
