import type { FC } from 'react';
import React from 'react';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { UserCookie } from '@/components/Login/LoginComponent/types';
import {
  Avatar,
  LogoutItem, MenuItem, Premium,
} from './styles';

export type Props = {
  userCookie: UserCookie | null;
  handleStripeCheckout: (event: any) => void;
};

const BigMenu: FC<Props> = ({ userCookie, handleStripeCheckout }) => (
  <>
    <MenuItem href="/home">
      <p>Inicio</p>
    </MenuItem>
    <MenuItem href="/games">
      <p>Juegos</p>
    </MenuItem>
    <MenuItem href="/trails">
      <p>Trails</p>
    </MenuItem>
    {userCookie && (
      <>
        <MenuItem href="/trail/create">
          <p>Crear Trail</p>
        </MenuItem>
        <MenuItem href={`/user/${userCookie?.id}`}>
          <Avatar src={userCookie.avatar} alt="No hay imagen" />
        </MenuItem>
        {userCookie?.plan === 'STANDARD' && (
          <Premium onClick={handleStripeCheckout}>
            <p>Premium</p>
          </Premium>
        )}
        <LogoutItem href="/auth/logout">
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </LogoutItem>
      </>
    )}
  </>
);

export default BigMenu;
