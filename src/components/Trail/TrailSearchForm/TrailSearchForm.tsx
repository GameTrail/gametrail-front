import type { FC } from 'react';
import { SORTED_PLATFORMS } from './constants';
import {
  Container, Label, Input, PlatformSelect, PlatformOption, SearchButton,
} from './styles';
import type { SearchProps } from './types';

type Props = {
  searchFormQuery: SearchProps;
  handleUpdateSearchForm: (searchFormQuery: SearchProps) => void;
  handleSearch: (searchFormQuery: SearchProps) => void;
};

const TrailSearchForm: FC<Props> = ({ searchFormQuery, handleUpdateSearchForm, handleSearch }) => (
  <Container>
    <h1>Search form</h1>
    <Label htmlFor="username">Username</Label>
    <Input
      type="text"
      id="username"
      name="username"
      value={searchFormQuery.username}
      onChange={(e) => handleUpdateSearchForm({ ...searchFormQuery, username: e.target.value })}
      placeholder="Busca por usuario..."
    />
    <Label htmlFor="username">Plataforma</Label>
    <PlatformSelect name="platform" id="platform" onChange={(e) => handleUpdateSearchForm({ ...searchFormQuery, platform: e.target.value })}>
      <PlatformOption value={searchFormQuery.platform ?? ''}>
        Selecione una plataforma
      </PlatformOption>
      {SORTED_PLATFORMS.map((option) => (
        <PlatformOption
          key={option.id}
          value={option.name}
        >
          {option.name}
        </PlatformOption>
      ))}
    </PlatformSelect>
    <Label htmlFor="game">Juego</Label>
    <Input
      type="text"
      id="game"
      name="game"
      value={searchFormQuery.game}
      onChange={(e) => handleUpdateSearchForm({ ...searchFormQuery, game: e.target.value })}
      placeholder="Busca por nombre del juego..."
    />
    <Label htmlFor="startDate">Fecha de inicio</Label>
    <Input
      type="date"
      id="startDate"
      name="startDate"
      value={searchFormQuery.startDate}
      onChange={(e) => handleUpdateSearchForm({ ...searchFormQuery, startDate: e.target.value })}
      placeholder="Busca por fecha de inicio..."
    />
    <SearchButton onClick={() => handleSearch(searchFormQuery)}>
      Buscar
    </SearchButton>
  </Container>
);

export default TrailSearchForm;
