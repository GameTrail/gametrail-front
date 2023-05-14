import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { t } from 'i18next';
// import AsyncSelect from 'react-select/async';
import type { Game } from '@/models/Game/types';
import { SORTED_PLATFORMS } from './constants';
import {
  Container, Label, Input, PlatformSelect, PlatformOption, SearchButton, GamesSelectorStyles, ResetButton, Title, CrownContainer,
} from './styles';
import type { SearchProps } from './types';

type Props = {
  searchFormQuery: SearchProps;
  handleUpdateSearchForm: (searchFormQuery: SearchProps) => void;
  handleSearch: (searchFormQuery: SearchProps) => void;
  handleReset: (searchFormQuery: SearchProps) => void;
};

const GAMES_URL = 'https://gametrail-backend-s4-production.up.railway.app/api/game/';

const TrailSearchForm: FC<Props> = ({
  searchFormQuery, handleUpdateSearchForm, handleSearch, handleReset,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [, setFormError] = useState<string[]>([]);

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
  }, [searchQuery]);

  return (
    <Container>
      <CrownContainer>
        <Title>Filtros de búsqueda</Title>
        <FontAwesomeIcon className="crown" icon={faCrown} />
      </CrownContainer>
      <Label htmlFor="username">Usuario</Label>
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
      {/* <Label htmlFor="game">Juegos</Label>
      <AsyncSelect
        required
        isSearchable
        isClearable
        id="game"
        name="game"
        styles={GamesSelectorStyles}
        isLoading={loading}
        getOptionLabel={(option: Game) => option.name}
        getOptionValue={(option: Game) => option.id.toString()}
        onInputChange={(value) => setSearchQuery(value)}
        defaultOptions={games}
        loadOptions={async () => games}
        placeholder="Seleccione los juegos a filtrar..."
      /> */}
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
      <ResetButton onClick={() => handleReset(searchFormQuery)}>
        Limpiar filtros
      </ResetButton>
    </Container>
  );
};

export default TrailSearchForm;
