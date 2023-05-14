/* eslint-disable arrow-body-style */
import {
  useEffect, useState,
} from 'react';
import type { FC } from 'react';
import router from 'next/router';
import AsyncSelect from 'react-select/async';
import Error from '@/components/Error';
import LoadingSpinner from '@/components/LoadingSpinner';
import {
  DateFieldContainer,
  Form,
  Input,
  InputDate,
  InputTextArea,
  Label,
  GamesSelectorStyles,
  Title,
  ErrorContainer,
  CreateContainer,
  FormContainer,
  StandarContainer,
  DateLabel,
  ButtonEdition,
  ButtonDelete,
} from '@/components/Trail/TrailEdition/Form/styles';
import useLanguage from '@/i18n/hooks';
import type { Game } from '@/models/Game/types';
import type { TrailGame } from '@/models/Trail/types';
import { getUserCookie } from '@/utils/login';

const GAMES_URL = 'https://gametrail-backend-s4-production.up.railway.app/api/game/';

export type Props = {
  trailId: number;
};

const TrailEditionForm: FC<Props> = ({ trailId }) => {
  const { t } = useLanguage();
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [games, setGames] = useState<TrailGame[]>([]);
  const [gamesSearch, setGamesSearch] = useState<TrailGame[]>([]);
  const [gamesStarted, setGamesStarted] = useState<TrailGame[]>([]);
  const [loadingGames, setLoadingGames] = useState<boolean>(false);
  const [loadingTrail, setLoadingTrail] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [styleGuardar, setStyleGuardar] = useState({});

  const [isTrailEnded, setIsTrailEnded] = useState<boolean>(false);

  const [trailName, setTrailName] = useState('');
  const [trailDescription, setTrailDescription] = useState('');
  const [trailStartDate, setTrailStartDate] = useState('');
  const [trailEndDate, setTrailEndDate] = useState('');
  const [trailMaxNumber, setTrailMaxNumber] = useState(2);
  const [platforms, setPlatforms] = useState<string[]>([]);

  const [errorGames, setErrorGames] = useState<boolean>();

  const user = getUserCookie();
  const token = user?.token;
  const [formError, setFormError] = useState<string[]>([]);

  useEffect(() => {
    const selectPendingGames = (gamesTrailReponse: TrailGame[]) => gamesTrailReponse.filter((game: TrailGame) => game.status === 'PENDING');
    const selectStartedGames = (gamesTrailReponse: TrailGame[]) => gamesTrailReponse.filter((game: TrailGame) => game.status === 'PLAYING' || game.status === 'FINISHED');

    const fetchTrail = async () => {
      setLoadingTrail(true);
      try {
        const response = await fetch(`https://gametrail-backend-s4-production.up.railway.app/api/getTrail/${trailId}`);
        const data = await response.json();
        const pendingGames = selectPendingGames(data.games);
        const startedGames = selectStartedGames(data.games);
        setGames(pendingGames);
        setGamesStarted(startedGames);
        setTrailName(data.name);
        setTrailDescription(data.description);
        setTrailStartDate(data.startDate);
        const currentDate = new Date();
        const endDateSplitted = data.finishDate.split('-');
        const endDate = new Date(endDateSplitted[0], endDateSplitted[1] - 1, endDateSplitted[2]);
        setIsTrailEnded(currentDate > endDate);
        if (currentDate > endDate) setStyleGuardar({ backgroundColor: '#f1f1f1', color: '#808080', cursor: 'not-allowed' });
        setTrailEndDate(data.finishDate);
        setTrailMaxNumber(data.maxPlayers);
        setPlatforms(data.platforms);
        setError(false);
        setIsFirstRender(false);
      } catch (err) {
        setError(true);
      } finally {
        setLoadingTrail(false);
      }
    };
    if (isFirstRender) fetchTrail();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trailId]);

  const updateTrail = async () => {
    const requestData = {
      id: trailId.toString(),
      name: trailName,
      description: trailDescription,
      startDate: trailStartDate,
      finishDate: trailEndDate,
      maxPlayers: trailMaxNumber,
      owner: user?.id.toString(),
      platforms,
    };
    if (user?.plan !== 'PREMIUM' && trailMaxNumber > 4) {
      setFormError((prevState) => [...prevState, t('trail_create_error-2')]);
    }
    const res = await fetch('https://gametrail-backend-s4-production.up.railway.app/api/trail/', {
      method: 'PUT',
      body: JSON.stringify(requestData),
      headers: { Authorization: `Token ${token}`, 'Content-Type': 'application/json' },
    });
    if (!res.ok) {
      setFormError([t('trail_create_error-3')]);
    }
    const data = await res.json();

    return data.id;
  };

  const removeGame = async (gameId: string) => {
    const gameData = {
      trailId: trailId.toString(),
      gameToDelete: gameId,
    };

    try {
      const res = await fetch('https://gametrail-backend-s4-production.up.railway.app/api/gameInTrail', {
        method: 'DELETE',
        body: JSON.stringify(gameData),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        },
      });
      if (!res.ok) {
        const errorData = await res.json() as { [key: string]: string[] };
        const errorMessages = Object.entries(errorData).flatMap(([key, errores]) => errores.map((err) => `${key}: ${err}`));
        setFormError(errorMessages);
      }
    } catch (err) {
      setFormError([t('trail_create_error-4')]);
    }
  };

  const addGame = async (gameId: string, index: number) => {
    const gameData = {
      trail: trailId.toString(),
      game: gameId,
      priority: (index + 1),
      message: 'Pendiente de selección',
      status: 'PENDING',
    };

    try {
      const res = await fetch('https://gametrail-backend-s4-production.up.railway.app/api/gameInTrail', {
        method: 'POST',
        body: JSON.stringify(gameData),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        },
      });
      if (!res.ok) {
        const errorData = await res.json() as { [key: string]: string[] };
        const errorMessages = Object.entries(errorData).flatMap(([key, errores]) => errores.map((err) => `${key}: ${err}`));
        setFormError(errorMessages);
      }
    } catch (err) {
      setFormError([t('trail_create_error-4')]);
    }
  };

  const updateTrailGames = async (gamesToAddArr: string[], gamesToRemove: string []) => {
    gamesToRemove.forEach(async (gameId) => {
      await removeGame(gameId);
    });
    gamesToAddArr.forEach(async (gameId, index) => {
      await addGame(gameId, index);
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const gamesSelectedWithoutFormat = formData.getAll('games'); // Lista de ids de juegos seleccionados en el form al editar
    const gamesSelected: string[] = []; // Lista donde se van a guardar los ids como string de los juegos seleccionados
    gamesSelectedWithoutFormat.forEach((game) => gamesSelected.push(game.toString()));
    const gamesInTrail = [...games, ...gamesStarted]; // Lista de juegos que ya estaban en el trail
    const gamesIdToAdd = gamesSelected.filter((gameId: string) => !gamesInTrail.some((g) => g.id.toString() === gameId)); // ID's de los juegos que hay que añadir al trail
    const gamesToRemove = games.filter((game: TrailGame) => !gamesSelected.some((gameId) => gameId === game.id.toString())); // Juegos que hay que eliminar del trail
    const gamesIdToRemove = gamesToRemove.map((game: TrailGame) => game.id.toString()); // Lista con los ID's de los juegos que hay que elimianr del trail
    await updateTrail();
    await updateTrailGames(gamesIdToAdd, gamesIdToRemove);
    router.push(`/trail/${trailId}`);
  };

  const handleDeleteTrail = async () => {
    try {
      const res = await fetch('https://gametrail-backend-s4-production.up.railway.app/api/trail/', {
        method: 'DELETE',
        body: JSON.stringify({ trailId }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        },
      });
      if (!res.ok) {
        const errorData = await res.json() as { [key: string]: string[] };
        const errorMessages = Object.entries(errorData).flatMap(([key, errores]) => errores.map((err) => `${key}: ${err}`));
        setFormError(errorMessages);
      }
      router.push(`/user/${user?.id}`);
    } catch (err) {
      setFormError([t('trail_create_error-4')]);
    }
  };

  useEffect(() => {
    const fetchGames = async () => {
      setLoadingGames(true);
      try {
        // const searchUrl = searchQuery.length > 1 ? `${GAMES_URL}?search=${searchQuery}` : GAMES_URL;
        const searchUrl = `${GAMES_URL}?search=${searchQuery}`;
        const response = await fetch(searchUrl);
        const data = await response.json();
        const gamesWithoutPendingSelected = data.results.filter((game: Game) => !games.some((g) => g.id === game.id));
        const gamesWithoutSelectedYet = gamesWithoutPendingSelected.filter((game: Game) => !gamesStarted.some((g) => g.id === game.id));
        setGamesSearch(gamesWithoutSelectedYet);
      } catch (err) {
        setFormError([t('trail_create_error-5')]);
      } finally {
        setLoadingGames(false);
      }
    };
    if (!isFirstRender) fetchGames();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, t]);

  if (loadingTrail) return <LoadingSpinner />;
  if (error) return <Error />;
  return (
    <Form onSubmit={handleSubmit}>
      <CreateContainer>
        <Title>
          {t('trail_edit_title')}
        </Title>
        <FormContainer>
          <StandarContainer>
            {isTrailEnded
          && (
          <ErrorContainer>
            {t('trail_edit_error_ended')}
          </ErrorContainer>
          )}
            {formError.map((message) => (<ErrorContainer key={formError.indexOf(message)}>{message}</ErrorContainer>))}
            <Label>
              {t('trail_create_name')}
              <Input
                required
                type="text"
                name="name"
                id="name"
                maxLength={40}
                placeholder={t('trail_create_placeholder').toString()}
                value={trailName}
                onChange={(e) => setTrailName(e.target.value)}
                disabled={isTrailEnded}
              />
            </Label>
            <Label>
              {t('description')}
              <InputTextArea
                required
                name="description"
                id="description"
                placeholder={t('description_placeholder').toString()}
                value={trailDescription}
                maxLength={140}
                onChange={(e) => setTrailDescription(e.target.value)}
                disabled={isTrailEnded}
              />
            </Label>
            <DateFieldContainer>
              <DateLabel>
                {t('start_date')}
                <InputDate
                  required
                  type="date"
                  name="start-date"
                  id="start-date"
                  min={new Date().toISOString().split('T')[0]}
                  value={trailStartDate}
                  disabled
                  style={{ backgroundColor: '#f1f1f1', color: '#808080' }}
                />
              </DateLabel>
              <DateLabel>
                {t('finish_date')}
                <InputDate
                  required
                  type="date"
                  name="end-date"
                  id="end-date"
                  min={trailStartDate ? new Date(trailStartDate).toISOString().split('T')[0] : ''}
                  value={trailEndDate}
                  disabled
                  style={{ backgroundColor: '#f1f1f1', color: '#808080' }}
                />
              </DateLabel>
            </DateFieldContainer>
            <Label>
              {t('max_players')}
              <Input
                required
                type="number"
                name="max-players"
                id="max-players"
                min={1}
                value={trailMaxNumber}
                disabled
                style={{ backgroundColor: '#f1f1f1', color: '#808080' }}
              />
            </Label>
            <Label htmlFor="games">
              {t('trail_create_games')}
              {errorGames
            && (
            <ErrorContainer key="errorFormEditTrail">
              {t('trail_edit_error-games')}
            </ErrorContainer>
            )}
              <AsyncSelect
                required
                isMulti
                isSearchable
                name="games"
                styles={GamesSelectorStyles}
                getOptionLabel={(option: TrailGame) => option.name}
                getOptionValue={(option: TrailGame) => option.id.toString()}
                isLoading={loadingGames}
                onInputChange={(value) => setSearchQuery(value)}
                defaultValue={games}
                loadOptions={async () => gamesSearch}
                onChange={(selectedOptions) => {
                  if ((gamesStarted.length + selectedOptions.length) > 3) {
                    setStyleGuardar({ backgroundColor: '#f1f1f1', color: '#808080', cursor: 'not-allowed' });
                    setErrorGames(true);
                  } else {
                    setStyleGuardar({});
                    setErrorGames(false);
                  }
                }}
                isDisabled={isTrailEnded}
              />
            </Label>
          </StandarContainer>
        </FormContainer>
        <ButtonEdition disabled={errorGames || isTrailEnded} style={styleGuardar}>{t('save_trail')}</ButtonEdition>
        <ButtonDelete style={{ backgroundColor: '#FA4A24' }} onClick={() => handleDeleteTrail()}>{t('delete_trail')}</ButtonDelete>
      </CreateContainer>
    </Form>
  );
};

export default TrailEditionForm;
