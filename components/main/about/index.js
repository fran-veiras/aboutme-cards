/* eslint-disable jsx-a11y/alt-text */
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import ThemesMain from '../../../public/themes';

export const AboutAppComponent = () => {
  return (
    <Flex
      py={20}
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      gridGap={10}
    >
      <Box textAlign="center" display="flex" flexDir="column">
        <Heading variant="secondary" my={4}>
          Tu card en todas tus redes.
        </Heading>
        <Heading variant="subtitles" my={4}>
          La información es poder, cualquier persona a través del link podrá
          acceder a tu perfil profesional.
        </Heading>
      </Box>
      <Flex position="relative" alignItems="center" justifyContent="center">
        <Image zIndex="3" src={'/compu.png'} width="80%" height="80%" />
        <Image
          src={'/example.png'}
          width="80%"
          position="absolute"
          top="10"
          borderRadius="7px"
          boxShadow="md"
        />
      </Flex>
    </Flex>
  );
};
