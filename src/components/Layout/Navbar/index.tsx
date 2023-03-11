import React from 'react';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu, MenuItem, Nav } from './styles';

const Navbar = () => (
  <Nav>
    <h1>GAMETRAIL</h1>
    <Menu>
      <MenuItem href="/home">
        <h4>Home</h4>
      </MenuItem>
      <MenuItem href="/">
        <h4>About</h4>
      </MenuItem>
      <MenuItem href="/auth/logout">
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
      </MenuItem>
    </Menu>
  </Nav>
);

export default Navbar;
