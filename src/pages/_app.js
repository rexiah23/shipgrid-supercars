// src/pages/_app.js
import React, { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';  // Importing theme from separate file
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';  // Make sure to create this file as instructed

const isProduction = process.env.NODE_ENV === 'production';

function MyApp({ Component, pageProps }) {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const router = useRouter();

  useEffect(() => {
    if (isProduction) {
      const handleRouteChange = (url) => {
        gtag.pageview(url);
      };

      router.events.on('routeChangeComplete', handleRouteChange);
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    }
  }, [router.events]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {isProduction && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gtag.GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}
      <Header isMobile={isMobile} />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
