import React from 'react';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGameTrail } from '@/hooks';
import {
  Menu, MenuItem, Nav, Username,
} from './styles';

const Navbar = () => {
  const { user, token } = useGameTrail();

  return (
    <Nav>
      <h1>GAMETRAIL</h1>
      <Menu>
        <MenuItem href="/home">
          <h4>Inicio</h4>
        </MenuItem>
        <MenuItem href="/games">
          <h4>Juegos</h4>
        </MenuItem>

        {token && (
          <>
            <MenuItem href="/trail/create">
              <h4>Crear Trail</h4>
            </MenuItem>
            <MenuItem href={`/api/user/${user?.id}`}>
              <Username>
                Bienvenido,
                {' '}
                {user?.username}
              </Username>
            </MenuItem>
            <MenuItem href="/auth/logout">
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </MenuItem>
          </>

        )}
      </Menu>
    </Nav>
  );
};

export default Navbar;
