/* eslint-disable react/no-children-prop */
import { Image } from '@chakra-ui/image';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import { Input, SelectField } from '@chakra-ui/react';
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
        height="70vh"
        background="perimary"
        borderRadius="7px 7px 0px 7px"
        boxShadow="md"
        p={8}
        position="relative"
        gridGap={5}
      >
        <Box flex="1" display="flex" gridGap={3}>
          <Heading>Editar perfil</Heading>
        </Box>
        <Box flex="4" width="full" display="flex" flexDir="column" gridGap="3">
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
            <Box width="50%" display="flex">
              <InputLeftAddon children="Email" />
              <Input />
            </Box>
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children="Idiomas" />
            <Select placeholder="Elige una opción">
              <option value="Inglés - Básico">Inglés - Básico</option>
              <option value="Inglés - Intermedio">Inglés - Intermedio</option>
              <option value="Inglés - Avanzado">Inglés - Avanzado</option>
              <option value="Francés - Básico">Francés - Básico</option>
              <option value="Francés - Intermedio">Francés - Intermedio</option>
              <option value="Francés - Avanzado">Francés - Avanzado</option>
              <option value="Portugués - Básico">Portugués - Básico</option>
              <option value="Portugués - Intermedio">
                Portugués - Intermedio
              </option>
              <option value="Portugués - Avanzado">Portugués - Avanzado</option>
              <option value="Alemán - Básico">Alemán - Básico</option>
              <option value="Alemán - Intermedio">Alemán - Intermedio</option>
              <option value="Alemán - Avanzado">Alemán - Avanzado</option>
              <option value="Ruso - Básico">Ruso - Básico</option>
              <option value="Ruso - Intermedio">Ruso - Intermedio</option>
              <option value="Ruso - Avanzado">Ruso - Avanzado</option>
            </Select>
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children="País" />
            <Input />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children="Acerca de vos" />
            <Textarea />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children="Habilidades" />
            <Input />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children="Cargo" />
            <Input />
            <InputLeftAddon children="Años" />
            <Select placeholder="Elige una opción">
              <option value="-1 año">-1 año</option>
              <option value="1 año">1 año</option>
              <option value="2 años">2 años</option>
              <option value="3 años">3 años</option>
              <option value="4 años">4 años</option>
              <option value="5 años">5 años</option>
              <option value="+5 años">+5 años</option>
            </Select>
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
