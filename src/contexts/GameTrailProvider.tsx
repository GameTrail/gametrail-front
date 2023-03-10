// import type { ReactNode } from 'react';
// import { useState } from 'react';
// import type { User } from '@/models/User/types';
// import GameTrailContext from './GameTrailContext';

// interface GameTrailProviderProps {
//   children: ReactNode;
// }

// const GameTrailProvider = (props: GameTrailProviderProps) => {
//   const { children } = props;
//   const [user, setUser] = useState<User | null>(
//     localStorage.getItem('user')
//       ? JSON.parse(localStorage.getItem('user') || '')
//       : null,
//   );
//   const [token, setToken] = useState<string | null>(
//     localStorage.getItem('token') || null,
//   );

//   const handleSetUser = (user: User) => {
//     setUser(user);
//   };

//   const handleSetToken = (token: string) => {
//     setToken(token);
//   };

//   const contextValue = {
//     user,
//     token,
//     handleSetUser,
//     handleSetToken,
//   };

//   return (
//     <GameTrailContext.Provider value={contextValue}>
//       {children}
//     </GameTrailContext.Provider>
//   );
// };

export {};
