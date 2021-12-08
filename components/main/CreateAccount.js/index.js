import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import { Input } from '@chakra-ui/react';
import { Button } from '@chakra-ui/button';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';

export const CreateAccount = () => {
  const route = useRouter();

  const sendData = () => {
    route.push('/login');
  };

  return (
    <Box
      py={20}
      display="flex"
      flexDir="column"
      gridGap={6}
      textAlign="center"
      justifyContent="center"
    >
      <Heading color="text" variant="subtitles">
        Comencemos a crear tu card y potenciar tu perfil profesional
      </Heading>
      <Button width="50%" margin="0 auto" onClick={sendData} variant="primary">
        Crear card
      </Button>
    </Box>
  );
};
