import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import ThemesMain from '../../../public/themes';

export const TemasEditables = () => {
  return (
    <Flex
      flexDir={{
        base: 'column', // 0-48em
        md: 'column', // 48em-80em,
        xl: 'row', // 80em+
        '2xl': 'row',
      }}
      py={20}
    >
      <Box width="full">
        <ThemesMain width="full" />
      </Box>
      <Box>
        <Heading variant="secondary" my={4}>
          Accede a temas editables 100% gratis.
        </Heading>
        <Heading variant="subtitles" my={4}>
          Tu información profesional, de la manera más profesional
        </Heading>
        <Text variant="paragraph">
          Luego de tener tu cuenta podrás acceder a un panel, donde podrás con
          muy pocos clicks crear y modificar tu perfil. Queremos que tu
          experiencia sea optima.
        </Text>
      </Box>
    </Flex>
  );
};
