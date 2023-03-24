'use client';

import type { FC } from 'react';
import { useCallback } from 'react';
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
} from '@/components/Trail/TrailCreation/Form/styles';

export type Props = {
  handleSetLoading: (value: boolean) => void
};

const TrailCreationForm: FC<Props> = ({ handleSetLoading }) => {
  const router = useRouter();
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
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!res.ok) {
        throw new Error(res.statusText);
      }
    } catch {
      const res = await fetch('https://gametrail-backend-production.up.railway.app/api/trail/');
      const data: [] = await res.json();
      const size = data.length;

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
        <Input type="number" name="max-players" id="max-players" />
      </FieldContainer>

      <ButtonRow>
        <Button type="submit">Create</Button>
      </ButtonRow>
    </Form>
  );
};

export default TrailCreationForm;
