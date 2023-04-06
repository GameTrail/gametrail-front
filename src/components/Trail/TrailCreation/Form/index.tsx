import {
  useEffect, useState,
} from 'react';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  GamesSelectorStyles,
  Title,
  ErrorContainer,
} from '@/components/Trail/TrailCreation/Form/styles';
import type { Game } from '@/models/Game/types';
import type { Trail } from '@/models/Trail/types';
import { getUserCookie } from '@/utils/login';
import { handlePremiumFilters } from '@/utils/trail/handlePremiumFilters';

interface TrailCreationFormProps {
  handleSetLoadingForm: (loading: boolean) => void;
}

const TrailCreationForm = ({ handleSetLoadingForm }: TrailCreationFormProps) => {
  const [games, setGames] = useState<Game[]>([]);
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
  const [formError, setFormError] = useState<string[]>([]);

  const [loadingInputSelectGames, setLoadingInputSelectGames] = useState(false);

  const createTrail = async () => {
    try {
      const requestData = {
        name: trailName,
        description: trailDescription,
        startDate: trailStartDate,
        finishDate: trailEndDate,
        maxPlayers: trailMaxNumber,
        owner: user?.id.toString(),
      };
      const res = await fetch('https://gametrail-backend-production-8fc0.up.railway.app/api/trail/', {
        method: 'POST',
        body: JSON.stringify(requestData),
        headers: { Authorization: `Token ${token}`, 'Content-Type': 'application/json' },
      });
      if (!res.ok) {
        const errorData = await res.json() as { [key: string]: string[] };
        const errorMessages = Object.entries(errorData).flatMap(([key, errors]) => errors.map((error) => `${key}: ${error}`));
        setFormError(errorMessages);
      }
      // TODO: Obtener el id del trail creado desde backend en lugar de hacerlo así
      const trailRes = await fetch('https://gametrail-backend-production-8fc0.up.railway.app/api/getTrail/');
      const trailData: Trail[] = await trailRes.json();
      const trailId = trailData[trailData.length - 1].id;
      return trailId;
    } catch (error) {
      setFormError([Error().message]);
      throw new Error();
    }
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
        const errorMessages = Object.entries(errorData).flatMap(([key, errors]) => errors.map((error) => `${key}: ${error}`));
        setFormError(errorMessages);
      }
    } catch (error) {
      setFormError([Error().message]);
      setFormError(['No se han podido añadir los juegos. Prueba de nuevo, revisa los campos.']);
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
    // Paso 1: Crear el trail
    const trailId = await createTrail();

    // Paso 2: Crear los juegos del trail
    await createTrailGames(formData, trailId);

    // Paso 3: Crear los filtros premium del trail
    if (user?.plan === 'Premium') {
      await handlePremiumFilters(formData, trailId, user, token);
    }
  };

  useEffect(() => {
    const fetchGames = async () => {
      setLoadingInputSelectGames(true);
      try {
        const res = await fetch('https://gametrail-backend-production-8fc0.up.railway.app/api/game/');
        const data: Game[] = await res.json();
        setGames(data);
      } catch (error) {
        setLoadingInputSelectGames(false);
        setFormError(['No se han cargado los juegos, prueba de nuevo']);
      } finally {
        setLoadingInputSelectGames(false);
      }
    };
    fetchGames();
  }, [formError]);

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
            placeholder="Escribe una descripción para este Trail. 140 Caracteres máximo"
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
          <Select isMulti name="games" isLoading={loadingInputSelectGames} isDisabled={loadingInputSelectGames} options={games} getOptionLabel={(option: Game) => option.name} getOptionValue={(option: Game) => option.id.toString()} styles={GamesSelectorStyles} placeholder="Selecciona los juegos que quieras..." />
        </Label>
        <Button type="submit">Create</Button>
      </Form>
    </>
  );
};

export default TrailCreationForm;
