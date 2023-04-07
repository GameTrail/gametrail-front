import React from 'react';
import { Foot, Menu, MenuItem } from './styles';

const Footer = () => (
  <Foot>
    <h1>GAMETRAIL</h1>
    <Menu>
      <MenuItem href="/terms">
        <h4>Términos y condiciones de uso</h4>
      </MenuItem>
      <MenuItem href="/disclaimer">
        <h4>Aviso legal</h4>
      </MenuItem>
      <MenuItem href="/">
        <h4>Contacto</h4>
      </MenuItem>
      <MenuItem href="/">
        <h4>Política de privacidad</h4>
      </MenuItem>
      <MenuItem href="/">
        <h4>Política de datos</h4>
      </MenuItem>
    </Menu>
  </Foot>
);

export default Footer;
