import {
  useEffect, useState,
} from 'react';
import router from 'next/router';
import AsyncSelect from 'react-select/async';
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
  FormContainer,
  StandarContainer,
  CreateContainer,
  DateLabel,
} from '@/components/Trail/TrailCreation/Form/styles';
import useLanguage from '@/i18n/hooks';
import type { Game } from '@/models/Game/types';
import { getUserCookie } from '@/utils/login';
import { handlePremiumFilters } from '@/utils/Trail/handlePremiumFilters';
import PremiumFilters from '../PremiumFilters';

const GAMES_URL = 'https://gametrail-backend-production-8fc0.up.railway.app/api/game/';

const TrailCreationForm = () => {
  const { t } = useLanguage();
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [trailName, setTrailName] = useState('');
  const [trailDescription, setTrailDescription] = useState('');
  const [trailStartDate, setTrailStartDate] = useState('');
  const [trailEndDate, setTrailEndDate] = useState('');
  const [trailMaxNumber, setTrailMaxNumber] = useState(2);

  const [useramabilidad, setUseramabilidad] = useState('3');
  const [userFunny, setUserFunny] = useState('3');
  const [userTeamwork, setUserTeamwork] = useState('3');
  const [userAbility, setUserAbility] = useState('3');
  const [userAvailhabilidad, setUserAvailhabilidad] = useState('3');
  const user = getUserCookie();
  const token = user?.token;
  const [formError, setFormError] = useState<string[]>([]);
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const startDate = new Date(trailStartDate);
    const endDate = new Date(trailEndDate);

    if (user?.plan !== 'PREMIUM' && (endDate.getTime() - startDate.getTime() > 7 * 86400000)) {
      setFormError((prevState) => [...prevState, t('trail_create_error-1')]);
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
      setFormError((prevState) => [...prevState, t('trail_create_error-2')]);
    }
    const res = await fetch('https://gametrail-backend-production-8fc0.up.railway.app/api/trail/', {
      method: 'POST',
      body: JSON.stringify(requestData),
      headers: { Authorization: `Token ${token}`, 'Content-Type': 'application/json' },
    });
    if (!res.ok) {
      setFormError([t('trail_create_error-3')]);
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
      setFormError([t('trail_create_error-4')]);
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
        setFormError([t('trail_create_error-5')]);
      } finally {
        setLoading(false);
      }
    };
    fetchGames();
  }, [searchQuery, t]);

  return (

    <Form onSubmit={handleSubmit}>
      <CreateContainer>
        <Title>
          {t('trail_create_title')}
        </Title>
        <FormContainer>
          <StandarContainer>
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
              />
            </Label>
            <PlanInfoToast>
              {t('trail_create_plan_info-1')}
            </PlanInfoToast>
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
                  onChange={handleDateChange}
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
                  onChange={handleDateChange}
                />
              </DateLabel>
            </DateFieldContainer>
            <PlanInfoToast>
              {t('trail_create_plan_info-2')}
            </PlanInfoToast>
            <Label>
              {t('max_players')}
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
            <Label htmlFor="games">
              {t('trail_create_games')}
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
          </StandarContainer>
          {
          user?.plan === 'Premium' && (
            <PremiumFilters
              userTeamwork={userTeamwork}
              userAbility={userAbility}
              useramabilidad={useramabilidad}
              userFunny={userFunny}
              userAvailhabilidad={userAvailhabilidad}
              setUserTeamwork={setUserTeamwork}
              setUserAbility={setUserAbility}
              setUseramabilidad={setUseramabilidad}
              setUserFunny={setUserFunny}
              setUserAvailhabilidad={setUserAvailhabilidad}
            />
          )
        }

        </FormContainer>
        <Button type="submit">{t('create')}</Button>
      </CreateContainer>
    </Form>

  );
};

export default TrailCreationForm;
