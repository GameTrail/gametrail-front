import type { FC } from 'react';
import React from 'react';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { UserCookie } from '@/components/Login/LoginComponent/types';
import { MenuItem, Premium, Username } from './styles';

export type Props = {
  userCookie: UserCookie | null;
  handleStripeCheckout: (event: any) => void;
};

const BigMenu: FC<Props> = ({ userCookie, handleStripeCheckout }) => (
  <>
    <MenuItem href="/home">
      <h4>Inicio</h4>
    </MenuItem>
    <MenuItem href="/games">
      <h4>Juegos</h4>
    </MenuItem>
    {userCookie && (
      <>
        <MenuItem href="/trail/create">
          <h4>Crear Trail</h4>
        </MenuItem>
        <MenuItem href={`/user/${userCookie?.id}`}>
          <Username>
            {userCookie?.username}
          </Username>
        </MenuItem>
        <Premium onClick={handleStripeCheckout}>
          <h4>Premium</h4>
        </Premium>
        <MenuItem href="/auth/logout">
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </MenuItem>
      </>
    )}
  </>
);

export default BigMenu;
