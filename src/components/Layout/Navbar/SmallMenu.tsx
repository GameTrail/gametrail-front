import type { FC } from 'react';
import React from 'react';
import type { UserCookie } from '@/components/Login/LoginComponent/types';
import {
  Avatar,
  LogoutItem, MenuItem, Premium,
} from './styles';

export type Props = {
  userCookie: UserCookie | null;
  handleStripeCheckout: (event: any) => void;
};

const SmallMenu: FC<Props> = ({ userCookie, handleStripeCheckout }) => (
  <>
    <MenuItem href="/home">
      <h4>Inicio</h4>
    </MenuItem>
    <MenuItem href="/games">
      <h4>Juegos</h4>
    </MenuItem>
    <MenuItem href="/trails">
      <p>Trails</p>
    </MenuItem>
    {userCookie && (
      <>
        <MenuItem href="/trail/create">
          <h4>Crear Trail</h4>
        </MenuItem>
        <MenuItem href={`/user/${userCookie?.id}`}>
          <Avatar src={userCookie.avatar} alt="No hay imagen" />
        </MenuItem>
        {userCookie?.plan === 'STANDARD' && (
          <Premium onClick={handleStripeCheckout}>
            <h4>Hazte Premium</h4>
          </Premium>
        )}
        <LogoutItem href="/auth/logout">
          <h4>Salir</h4>
        </LogoutItem>
      </>
    )}
  </>
);

export default SmallMenu;
