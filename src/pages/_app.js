// src/pages/_app.js
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';  // Importing theme from separate file
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useMediaQuery } from '@mui/material';

function MyApp({ Component, pageProps }) {
  const isMobile = useMediaQuery('(max-width: 600px)')

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header isMobile={isMobile}/>
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
