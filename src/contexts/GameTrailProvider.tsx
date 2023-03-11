import type { ReactNode } from 'react';
import { useCallback, useMemo, useState } from 'react';
import type { User } from '@/models/User/types';
import GameTrailContext from './GameTrailContext';

interface GameTrailProviderProps {
  children: ReactNode;
}

const GameTrailProvider = (props: GameTrailProviderProps) => {
  const { children } = props;
  const [user, setUser] = useState<User | null>(
    localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user') || '')
      : null,
  );
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('token') || null,
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [message, setMessage] = useState<string>('');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userLoading, setUserLoading] = useState<boolean>(false);

  const handleSetUser = useCallback(
    (gametrailUser: User) => {
      setUser(gametrailUser);
    },
    [],
  );

  const handleSetToken = useCallback(
    (authToken: string) => {
      setToken(authToken);
    },
    [],
  );

  const handleLogout = useCallback(
    () => {
      setUser(null);
      setToken(null);
      localStorage.removeItem('token');
      localStorage.removeItem('user');

      const API_URL = 'http://127.0.0.1:3000/api/logout/';
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      };
      const logout = async () => {
        try {
          const response = await fetch(API_URL, options);
          if (response.ok) {
            const data = await response.json();
            // eslint-disable-next-line no-console
            console.log(data);
          }
        } catch (error) {
        // eslint-disable-next-line no-console
          console.log({ error });
        }
      };
      logout();
    },
    [user],
  );

  const contextValue = useMemo(() => ({
    user,
    token,
    handleSetUser,
    handleSetToken,
    handleLogout,
    userLoading,
    message,
  }), [user,
    token,
    handleSetUser,
    handleSetToken,
    handleLogout,
    userLoading,
    message]);

  return (
    <GameTrailContext.Provider value={contextValue}>
      {children}
    </GameTrailContext.Provider>
  );
};

export default GameTrailProvider;
