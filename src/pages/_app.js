// src/pages/_app.js
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '@fontsource/roboto';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header /> 
      <main>
        <Component {...pageProps} />
      </main>
      <Footer /> 
    </>
  );
}

export default MyApp;
