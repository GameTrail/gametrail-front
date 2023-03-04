import React from 'react';
import { Menu, MenuItem, Nav } from './styles';

const Navbar = () => (
  <Nav>
    <h1>GAMETRAIL</h1>
    <Menu>
      <MenuItem href="/">
        <h4>Home</h4>
      </MenuItem>
      <MenuItem href="/">
        <h4>About</h4>
      </MenuItem>
    </Menu>
  </Nav>
);

export default Navbar;
