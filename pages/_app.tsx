import '../styles/global.css';
import Header from '../components/header';
import type {AppProps} from 'next/app';
import Banner from '../components/banner';
import { ChakraProvider, useMediaQuery } from '@chakra-ui/react';
import Footer from '../components/footer';


export default ({Component, pageProps}: AppProps) => {
  // single media query with no options
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')




  return (
    <>
  <ChakraProvider>
      <Header/>
      <Banner/>
      <Component {...pageProps} />
      <Footer/>
  </ChakraProvider>
    </>
  );
};
