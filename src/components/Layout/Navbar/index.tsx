'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { faArrowRightFromBracket, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useGameTrail } from '@/hooks';
import type { User } from '@/models/User/types';
import {
  Menu, MenuItem, Nav, MobileMenuIcon, ResponsiveNavbar, Username, Premium,
} from './styles';

const Navbar = () => {
  const { user, token } = useGameTrail();
  const [showMenu, setShowMenu] = useState(false);
  const [width, setWidth] = useState(0);
  const [tokenState, setToken] = useState<string | null>(token);
  const [userState, setUser] = useState<User | null>(user);

  useEffect(() => {
    const newToken = localStorage.getItem('token');
    const newUser = JSON.parse(localStorage.getItem('user') || '{}');
    if (newUser !== '{}') {
      setToken(newToken);
      setUser(JSON.parse(localStorage.getItem('user') || '{}'));
    } else {
      setToken(null);
      setUser(null);
    }
  }, [token, user]);

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
        <Link href="/"><h1>GAMETRAIL</h1></Link>
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
          {tokenState !== null && (
          <>
            <MenuItem href="/trail/create">
              <h4>Crear Trail</h4>
            </MenuItem>
            <MenuItem href={`/api/user/${user?.id}`}>
              <Username>
                {userState?.username}
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
            {tokenState !== null && (
            <>
              <MenuItem href="/trail/create">
                <h4>Crear Trail</h4>
              </MenuItem>
              <MenuItem href={`/api/user/${user?.id}`}>
                <Username>
                  {userState?.username}
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
