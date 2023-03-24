import { useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { User } from '@/models/User/types';
import GameTrailContext from './GameTrailContext';

interface GameTrailProviderProps {
  children: ReactNode;
}

const GameTrailProvider = ({ children }: GameTrailProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const [message] = useState<string>('');
  const [userLoading] = useState<boolean>(false);

  const handleSetUser = (gametrailUser: User | null) => {
    setUser(gametrailUser);
  };

  const handleSetToken = (authToken: string | null) => {
    setToken(authToken);
  };

  const contextValue = useMemo(() => ({
    user,
    token,
    message,
    userLoading,
    handleSetUser,
    handleSetToken,
  }), [user, token, message, userLoading]);

  return (
    <GameTrailContext.Provider value={contextValue}>
      {children}
    </GameTrailContext.Provider>
  );
};

export default GameTrailProvider;
