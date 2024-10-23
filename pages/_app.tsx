import '../styles/global.css';
import Header from '../components/header';
import type {AppProps} from 'next/app';
import Banner from '../components/banner';
import { ChakraProvider } from '@chakra-ui/react'
import Footer from '../components/footer'


export default ({Component, pageProps}: AppProps) => {
  return (
    <>
  <ChakraProvider>
      <Header />
      <Banner/>
      <Component {...pageProps} />
      <Footer/>
  </ChakraProvider>
    </>
  );
};
