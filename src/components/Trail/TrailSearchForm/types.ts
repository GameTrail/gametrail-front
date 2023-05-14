export type SearchProps = {
  username: string;
  platform: string;
  startDate: string;
  game: string;
};

export const DEFAULT_TRAIL_SEARCH_FORM: SearchProps = {
  username: '',
  platform: '',
  startDate: '',
  game: '',
};
