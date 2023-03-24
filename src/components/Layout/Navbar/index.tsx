import React from 'react';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Menu, MenuItem, Nav, Username,
} from './styles';

const Navbar = () => {
  const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

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
        <MenuItem href="/trail/create">
          <h4>Crear Trail</h4>
        </MenuItem>
        {storedUser && (
          <MenuItem href={`/api/user/${storedUser.id}`}>
            <Username>{storedUser.username}</Username>
          </MenuItem>
        )}
        <MenuItem href="/auth/logout">
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </MenuItem>
      </Menu>
    </Nav>
  );
};

export default Navbar;
