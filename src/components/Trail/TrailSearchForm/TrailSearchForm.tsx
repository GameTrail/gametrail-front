import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useLanguage from '@/i18n/hooks';
import type { Game } from '@/models/Game/types';
import { SORTED_PLATFORMS } from './constants';
import {
  Container, Label, Input, PlatformSelect, PlatformOption, SearchButton, ResetButton, Title, CrownContainer,
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
  const { t } = useLanguage();
  const [searchQuery] = useState<string>('');
  const [, setGames] = useState<Game[]>([]);
  const [, setLoading] = useState<boolean>(false);
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
  }, [t, searchQuery]);

  return (
    <Container>
      <CrownContainer>
        <Title>
          {t('trail_filters_title')}
        </Title>
        <FontAwesomeIcon className="crown" icon={faCrown} />
      </CrownContainer>
      <Label htmlFor="username">{t('trail_filters_user')}</Label>
      <Input
        type="text"
        id="username"
        name="username"
        value={searchFormQuery.username}
        onChange={(e) => handleUpdateSearchForm({ ...searchFormQuery, username: e.target.value })}
        placeholder="Busqueda por usuario..."
      />
      <Label htmlFor="username">{t('trail_filters_platform')}</Label>
      <PlatformSelect name="platform" id="platform" onChange={(e) => handleUpdateSearchForm({ ...searchFormQuery, platform: e.target.value })}>
        <PlatformOption value={searchFormQuery.platform ?? ''}>
          {t('trail_filters_platform_placeholder')}
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
      <Label htmlFor="game">{t('trail_filters_game')}</Label>
      <Input
        type="text"
        id="game"
        name="game"
        value={searchFormQuery.game}
        onChange={(e) => handleUpdateSearchForm({ ...searchFormQuery, game: e.target.value })}
        placeholder="Busca por nombre del juego..."
      />
      <Label htmlFor="startDate">{t('trail_filters_date')}</Label>
      <Input
        type="date"
        id="startDate"
        name="startDate"
        value={searchFormQuery.startDate}
        onChange={(e) => handleUpdateSearchForm({ ...searchFormQuery, startDate: e.target.value })}
        placeholder="Busca por fecha de inicio..."
      />
      <SearchButton onClick={() => handleSearch(searchFormQuery)}>
        {t('trail_filters_search')}
      </SearchButton>
      <ResetButton onClick={() => handleReset(searchFormQuery)}>
        {t('trail_filters_clean')}
      </ResetButton>
    </Container>
  );
};

export default TrailSearchForm;
