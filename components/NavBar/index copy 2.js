import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import useUser, { USER_STATES } from '../../hooks/useUser';
import { ProfileAcordion } from './profileAccordion';

export const NavBarCopy2 = () => {
  const route = useRouter();
  const user = useUser();

  const handleHome = () => {
    route.push('/');
  };

  const handleLogin = () => {
    route.push('/login');
  };

  return (
    <Flex
      background="secondary"
      w="full"
      height="80px"
      justifyContent="center"
      alignItems="center"
    >
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
        <Box display="flex" flexDir="row" alignItems="center" gridGap={3}>
          <Heading
            color="#fff"
            onClick={handleHome}
            cursor="pointer"
            variant="primary"
          >
            ABOUTME APP
          </Heading>
          <Box
            onClick={handleHome}
            background="#fff"
            width="40px"
            height="40px"
            p={2}
            borderRadius="9999px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
          >
            <Image width="full" src={'/logo.png'} />
          </Box>
        </Box>

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
