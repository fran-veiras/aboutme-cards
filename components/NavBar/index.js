import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import useUser, { USER_STATES } from '../../hooks/useUser';
import { ProfileAcordion } from './profileAccordion';

export const NavBar = () => {
  const route = useRouter();
  const user = useUser();

  const handleHome = () => {
    route.push('/');
  };

  const handleLogin = () => {
    route.push('/login');
  };

  return (
    <Flex w="full" height="80px" justifyContent="center">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        minWidth={{
          base: '95vw', // 0-48em
          md: '95vw', // 48em-80em,
          xl: '95vw', // 80em+
          '2xl': '65vw',
        }}
        py={2}
      >
        <Heading onClick={handleHome} cursor="pointer" variant="primary">
          ABOUTME APP
        </Heading>

        {user === USER_STATES.NOT_LOGED && (
          <Button onClick={handleLogin} variant="primary">
            Login
          </Button>
        )}
        {user !== USER_STATES.NOT_LOGED && user !== USER_STATES.NOT_KNOWN && (
          <ProfileAcordion avatar={user.avatar} userId={user.uid} />
        )}
      </Box>
    </Flex>
  );
};
