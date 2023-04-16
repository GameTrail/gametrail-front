import '@/styles/globals.css';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import theme from '@/theme';
import '../i18n';
// eslint-disable-next-line import/order
import useLanguage from '@/i18n/hooks';
// eslint-disable-next-line import/order
import { useEffect } from 'react';

const App = ({ Component, pageProps }: AppProps) => {
  const { setupLanguage } = useLanguage();
  useEffect(() => setupLanguage(), [setupLanguage]);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
