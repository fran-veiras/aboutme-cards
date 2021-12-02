/* eslint-disable react/no-children-prop */
import { Image } from '@chakra-ui/image';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import { Input } from '@chakra-ui/react';
import React from 'react';
import { InputGroup, InputLeftAddon } from '@chakra-ui/input';
import { Textarea } from '@chakra-ui/textarea';
import { Select } from '@chakra-ui/select';

export const EditProfile = ({ setEditCard, editCard }) => {
  const changeSelect = () => {
    editCard === false && setEditCard(!false);
    editCard === true && setEditCard(!true);
  };

  return (
    <Flex
      width="full"
      height="full"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        width="80vw"
        height="60vh"
        background="perimary"
        borderRadius="7px"
        boxShadow="md"
        p={8}
        position="relative"
        gridGap={5}
      >
        <Box flex="1" display="flex" gridGap={3}>
          <Heading>Editar perfil</Heading>
        </Box>
        <Box flex="3" width="full" display="flex" flexDir="column" gridGap="3">
          <InputGroup gridGap={3}>
            <Box display="flex">
              <InputLeftAddon children="Nombre" />
              <Input />
            </Box>
            <Box display="flex">
              <InputLeftAddon children="Apellido" />
              <Input />
            </Box>
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children="Idiomas" />
            <Select />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children="País" />
            <Input />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children="Acerca de vos" />
            <Textarea />
          </InputGroup>
        </Box>
        <Box
          borderRadius="0px 0px 10px 10px"
          position="absolute"
          background="#fff"
          boxShadow="md"
          width="100px"
          height="50px"
          bottom="-50"
          right="0"
          zIndex="9998"
          cursor="pointer"
          display="flex"
          justifyContent="center"
          alignItems="center"
          onClick={changeSelect}
        >
          <Text color="#000" variant="paragraph">
            Confirmar
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};
