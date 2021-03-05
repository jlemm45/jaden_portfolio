import '../scss/style.scss';
import Head from '../components/head';
import Nav from '../components/nav';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
