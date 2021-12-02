import { extendTheme } from '@chakra-ui/react';
import { ButtonStyles as Button } from '../components/styles/buttonComponent';
import { HeadingComponent as Heading } from '../components/styles/headingComponent';
import { TextComponent as Text } from '../components/styles/normalText';

export const themeApp = extendTheme({
  colors: {
    primary: '#05386b',
    secondary: '#5cdb95',
    tertiary: '#8ee4af',
    text: '#edf5e1',
  },
  components: {
    Button,
    Heading,
    Text,
  },
});
