import React, { useEffect, useState } from 'react';
import { faArrowRightFromBracket, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Menu, MenuItem, Nav, MobileMenuIcon, ResponsiveNavbar,
} from './styles';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setWidth(window.innerWidth);
      }
    };

    handleResize();

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  useEffect(() => {
    if (width > 768) {
      setShowMenu(false);
    }
  }, [width]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Nav>
      <ResponsiveNavbar>
        <h1>GAMETRAIL</h1>
        {width <= 768 && (
          <MobileMenuIcon showMenu={showMenu} onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </MobileMenuIcon>
        )}
      </ResponsiveNavbar>
      {width > 768 ? (
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
      ) : (
        showMenu && (
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
        )
      )}
    </Nav>
  );
};

export default Navbar;
