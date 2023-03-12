import { createContext } from 'react';
import type { User } from '@/models/User/types';

interface GameTrailContextProps {
  user: User | null;
  token: string | null;
  message: string;
  userLoading: boolean;
  handleSetUser: (user: User) => void;
  handleSetToken: (token : string) => void;
  handleLogout: () => void;
}

const GameTrailContext = createContext<GameTrailContextProps>({
  user: null,
  token: null,
  message: '',
  userLoading: false,
  handleSetUser: () => {},
  handleSetToken: () => {},
  handleLogout: () => {},
});

export default GameTrailContext;
