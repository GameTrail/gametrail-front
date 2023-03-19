import React, { useState } from 'react';
import { faArrowRightFromBracket, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Menu, MenuItem, Nav, MobileMenuIcon,
} from './styles';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Nav>
      <h1>GAMETRAIL</h1>
      <MobileMenuIcon onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </MobileMenuIcon>
      {showMenu ? (
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
          <MenuItem href="/auth/logout">
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
          </MenuItem>
        </Menu>
      ) : null}
    </Nav>
  );
};

export default Navbar;
