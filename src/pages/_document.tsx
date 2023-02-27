/* eslint-disable @next/next/no-title-in-document-head */
/* eslint-disable react/function-component-definition */
import {
  Html, Head, Main, NextScript,
} from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Unbounded&display=swap" rel="stylesheet" />
        <link rel="icon" href="/brand/gametrail-logo.png" />
        <title key="title">GameTrail</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
