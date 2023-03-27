'use client';

import type { FC } from 'react';
import { useCallback, useEffect, useState } from 'react';
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
  SelectorStyles,
} from '@/components/Trail/TrailCreation/Form/styles';
import type { Game } from '@/models/Game/types';
import type { Trail } from '@/models/Trail/types';
import { getUserCookie } from '@/utils/login';

export type Props = {
  handleSetLoading: (value: boolean) => void
};

const TrailCreationForm: FC<Props> = ({ handleSetLoading }) => {
  const user = getUserCookie();
  const token = user?.token; const router = useRouter();
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
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        },
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

      // Each game must be added to the trail by a POST request

      const selectedGames = formData.getAll('games');
      selectedGames.forEach((game) => {
        putGame(game, trailId, selectedGames).then((r) => r);
      });

      router.push(`/trail/${trailId}`);
      handleSetLoading(false);
    }
  }, [handleSetLoading, putGame, router, token, user?.id]);

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
        <Input type="number" name="max-players" id="max-players" />
      </FieldContainer>

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
