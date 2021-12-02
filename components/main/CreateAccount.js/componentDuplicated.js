import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import { Input } from '@chakra-ui/react';
import { Button } from '@chakra-ui/button';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';

export const ComponentDuplicated = ({ setNameUser }) => {
  const route = useRouter();

  const getTeams = () => {
    if (
      typeof localStorage !== 'undefined' &&
      localStorage.getItem('namePage') !== undefined
    ) {
      return JSON.parse(localStorage.getItem('namePage'));
    } else {
      return;
    }
  };

  const [namePage, setNamePage] = useState(getTeams());

  useEffect(() => {
    localStorage.setItem('namePage', JSON.stringify(namePage));
  }, [namePage]);

  const handleNamePage = (e) => {
    setNamePage(e.target.value);
  };

  useEffect(() => {
    setNameUser(namePage);
  }, [namePage]);

  return (
    <Box py={20} display="flex" flexDir="column" gridGap={6} textAlign="center">
      <Heading color="primary" variant="subtitles">
        Comencemos a crear tu card y potenciar tu perfil profesional
      </Heading>
      <Box position="relative" width="50%" margin="0 auto">
        <Flex flexDir="row" gridGap={1}>
          <Input
            value={namePage}
            onChange={handleNamePage}
            paddingLeft="240px"
            color="primary"
            fontSize="2xl"
            fontWeight="800"
            borderColor="primary"
            border="2px solid"
            focusBorderColor="none"
            _hover={{
              borderColor: 'none',
            }}
          />
        </Flex>
        <Box position="absolute" top="2px" left="12px">
          <Text color="primary" variant="primary">
            aboutme.com/user/
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
