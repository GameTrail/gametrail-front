import { ThemeContext } from 'styled-components';

import { useContext } from 'react';

const nord = {
  gray0: '#2E3440',
  gray1: '#3B4252',
  gray2: '#434C5E',
  gray3: '#4C566A',

  white0: '#D8DEE9',
  white1: '#E5E9F0',
  white2: '#ECEFF4',

  blue0: '#8FBCBB',
  blue1: '#88C0D0',
  blue2: '#81A1C1',
  blue3: '#5E81AC',

  red: '#BF616A',
  orange: '#D08770',
  beige: '#EBCB8B',
  green: '#A3BE8C',
  yellow: '#EBCB8B',
  purple: '#B48EAD',
};

const theme = {
  nord,
};

export type Theme = typeof theme;

export default theme as Theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export const useTheme = () => useContext(ThemeContext);
