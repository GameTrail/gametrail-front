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
  const [loading, setLoading] = useState<boolean>(false);

  const handleSetUser = (gametrailUser: User | null) => {
    setLoading(true);
    setUser(gametrailUser);
    setLoading(false);
  };

  const handleSetToken = (authToken: string | null) => {
    setLoading(true);
    setToken(authToken);
    setLoading(false);
  };

  const contextValue = useMemo(() => ({
    user,
    token,
    message,
    userLoading,
    handleSetUser,
    handleSetToken,
    loading,
  }), [user, token, message, userLoading, loading]);

  return (
    <GameTrailContext.Provider value={contextValue}>
      {children}
    </GameTrailContext.Provider>
  );
};

export default GameTrailProvider;
