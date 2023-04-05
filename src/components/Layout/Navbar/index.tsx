'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { getUserCookie } from '@/utils/login';
import BigMenu from './BigMenu';
import SmallMenu from './SmallMenu';
import {
  Nav, MobileMenuIcon, ResponsiveNavbar, Menu,
} from './styles';

const STRIPE_PRODUCT_URL = 'https://buy.stripe.com/test_6oE5ksaHO1Xr6Zy9AB';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [width, setWidth] = useState(0);
  const userCookie = getUserCookie();

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
      <Menu>
        {width > 768
          ? <BigMenu handleStripeCheckout={handleStripeCheckout} userCookie={userCookie} />
          : showMenu && <SmallMenu handleStripeCheckout={handleStripeCheckout} userCookie={userCookie} />}
      </Menu>
    </Nav>
  );
};

export default Navbar;
