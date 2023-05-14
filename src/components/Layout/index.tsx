import type { FC } from 'react';
import React from 'react';
import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';
import { Main } from './styles';
import type { Props } from './types';

const Layout: FC<Props> = ({ children }) => (
  <>
    <Head>
      <title>GameTrail 🎮 Limitless gaming</title>
      <meta name="description" content="GameTrail is a game platform that unite gamers into one community. We provide a platform for gamers to share their gaming experience and to find new friends." lang="en" />
      <meta name="description" content="GameTrail es una plataforma de videojuegos que une jugadores y comunidad. GameTrail ofrece a los gamers un lugar donde compartir sus experiencias de juego y encontrar nuevos compañeros de juego" lang="es" />
      <meta name="keywords" content="game, games, videogames, trail, gametrail, game-trail" />
      <meta name="author" content="GameTrail" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="GameTrail 🎮 Limitless gaming" />
      <meta property="og:description" content="👉 Join gamers and start playing together with GameTrail. Live chat 😎, Trails 🎮, Leaderboard 🏆 and much more. Join now 👇" lang="en" />
      <meta property="og:url" content="https://www.gametrail.vercel.app" />
      <meta property="og:image" content="https://i.ibb.co/WHZQgF4/gametrail-logo.png" />
      <link rel="icon" href="/brand/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
    </Head>
    <Navbar />
    <Main>
      {children}
    </Main>
    <Footer />
  </>
);

export default Layout;
