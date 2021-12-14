import { Button } from '@chakra-ui/button';
import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import PortadaImage from '../../../public/portada';

export const MainContentPort = () => {
  return (
    <Flex
      flexDir={{
        base: 'column', // 0-48em
        md: 'column', // 48em-80em,
        xl: 'row', // 80em+
        '2xl': 'row',
      }}
      mt={20}
      gridGap={5}
      position="relative"
      background="linear-gradient(274deg, rgba(148,231,185,1) 0%, rgba(92,219,149,1) 60%)"
      py={3}
    >
      <Box zIndex="20">
        <Heading variant="secondary" mb={5}>
          Mostrá tu valor al mundo!
        </Heading>
        <Text variant="primary">
          <Box
            display="inline"
            borderBottom="2px solid"
            borderColor="text"
            px={1}
          >
            AboutMe
          </Box>{' '}
          es una aplicación que{' '}
          <Box
            display="inline"
            borderBottom="2px solid"
            borderColor="text"
            px={1}
          >
            genera por vos un sitio web{' '}
          </Box>
          con una card en la cual podrás mostrar tu perfil profesional
        </Text>
        <Flex gridGap={5} my={8} flexDir="column">
          <Box display="flex" flexDir="column" borderRadius="7px" gridGap={3}>
            <Heading variant="subtitles"> Inicia sesión</Heading>
            <Text variant="paragraph">
              Solo te llevará un par de segundos ingresar con Google o GitHub.
            </Text>
          </Box>

          <Box display="flex" flexDir="column" borderRadius="7px" gridGap={3}>
            <Heading variant="subtitles">Mostrá tu valor</Heading>
            <Text variant="paragraph">
              Completa los campos requeridos con tu información profesional.
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box width="full" zIndex="19">
        <PortadaImage width="full" />
      </Box>
    </Flex>
  );
};
