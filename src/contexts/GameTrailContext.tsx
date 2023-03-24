import { createContext } from 'react';
import type { User } from '@/models/User/types';

interface GameTrailContextProps {
  user: User | null;
  token: string | null;
  message: string;
  userLoading: boolean;
  handleSetUser: (user: User | null) => void;
  handleSetToken: (token : string | null) => void;
}

const GameTrailContext = createContext<GameTrailContextProps>({
  user: null,
  token: null,
  message: '',
  userLoading: false,
  handleSetUser: () => {},
  handleSetToken: () => {},
});

export default GameTrailContext;
