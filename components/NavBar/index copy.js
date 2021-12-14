import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import useUser, { USER_STATES } from '../../hooks/useUser';
import { ProfileAcordion } from './profileAccordion';

export const NavBarCards = () => {
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
      display={{
        base: 'none',
        md: 'flex', // 48em-80em,
        xl: 'flex', // 80em+
        '2xl': 'flex',
      }}
      zIndex="2"
      position={{
        base: 'none',
        md: 'absolute', // 48em-80em,
        xl: 'absolute', // 80em+
        '2xl': 'absolute',
      }}
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
            cursor="pointer"
            background="#fff"
            width="40px"
            height="40px"
            p={2}
            borderRadius="9999px"
            alignItems="center"
            justifyContent="center"
            display="flex"
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
          <Box
            display={{
              base: 'none', // 0-48em
              md: 'flex', // 48em-80em,
              xl: 'flex', // 80em+
              '2xl': 'flex',
            }}
          >
            <ProfileAcordion avatar={user.avatar} userId={user.uid} />
          </Box>
        )}
      </Box>
    </Flex>
  );
};
