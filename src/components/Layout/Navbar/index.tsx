import React, { useEffect, useState, useCallback } from 'react';
import { faArrowRightFromBracket, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGameTrail } from '@/hooks';
import {
  Menu, MenuItem, Nav, MobileMenuIcon, ResponsiveNavbar, Username, Premium,
} from './styles';

const Navbar = () => {
  const { user, token } = useGameTrail();
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

  const STRIPE_PRODUCT_URL = 'https://buy.stripe.com/test_5kAdQYdU059Des06oo';
  const handleStripeCheckout = useCallback((event: any) => {
    event.preventDefault();
    window.location.href = STRIPE_PRODUCT_URL;
  }, []);

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
            <Premium onClick={handleStripeCheckout}>
              <h4>Premium</h4>
            </Premium>
            <MenuItem href="/auth/logout">
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </MenuItem>
          </>

          )}
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
              <Premium onClick={handleStripeCheckout}>
                <h4>Premium</h4>
              </Premium>
              <MenuItem href="/auth/logout">
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
              </MenuItem>
            </>
            )}
          </Menu>
        )
      )}
    </Nav>
  );
};

export default Navbar;
