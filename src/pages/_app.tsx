import '@/styles/globals.css';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import GameTrailProvider from '@/contexts/GameTrailProvider';
import theme from '@/theme';

const App = ({ Component, pageProps }: AppProps) => (
  <GameTrailProvider>
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  </GameTrailProvider>
);

export default App;
