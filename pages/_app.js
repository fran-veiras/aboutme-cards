import { ChakraProvider } from '@chakra-ui/react';
import { themeApp } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={themeApp}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
