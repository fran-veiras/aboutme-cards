/* eslint-disable react/no-children-prop */
import { Image } from '@chakra-ui/image';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import { Input, SelectField } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { InputGroup, InputLeftAddon } from '@chakra-ui/input';
import { Textarea } from '@chakra-ui/textarea';
import { Select } from '@chakra-ui/select';
import editar from '../../../firebase/client';
import { LenguagesComp } from './lenguages';
import { ExperienceComponent } from './experience';
import { SocialMediaComp } from './social';
import { SelectColorComp } from './selectColor';

export const EditProfile = ({
  setEditCard,
  editCard,
  data,
  userId,
  reloadData,
}) => {
  const changeSelect = () => {
    editCard === false && setEditCard(!false);
    editCard === true && setEditCard(!true);
  };

  // edit data

  const [surname, setSurname] = useState([]);
  const [name, setName] = useState([]);
  const [lenguage, setLenguage] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  const [social, setSocial] = useState([]);
  const [about, setAbout] = useState([]);
  const [color, setColor] = useState([]);

  useEffect(() => {
    setSurname(data.surname);
    setName(data.name);
    setLenguage(data.lenguage);
    setSkills(data.skills);
    setExperience(data.exp);
    setSocial(data.social);
    setAbout(data.about);
    setColor(data.color);
  }, [data]);

  const handleSurname = (e) => {
    setSurname(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleLenguague = (e) => {
    lenguage.length < 6 && setLenguage((val) => [...val, e.target.value]);
  };

  const handleSkills = (e) => {
    setSkills(e.target.value);
  };

  const handleAbout = (e) => {
    setAbout(e.target.value);
  };

  const sendData = async () => {
    editar(
      userId,
      surname,
      name,
      lenguage,
      skills,
      experience,
      social,
      about,
      color
    ).then(changeSelectFunc);
  };

  const changeSelectFunc = () => {
    reloadData();
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
        minHeight="70vh"
        background="#fff"
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
              <Input maxlength="25" value={name} onChange={handleName} />
            </Box>
            <Box display="flex">
              <InputLeftAddon children="Apellido" />
              <Input maxlength="25" value={surname} onChange={handleSurname} />
            </Box>
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children="Idiomas" />
            <Select
              value={lenguage}
              onChange={handleLenguague}
              placeholder="Elige una opción"
            >
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
              <option value="Italiano - Básico">Italiano - Básico</option>
              <option value="Italiano - Intermedio">
                Italiano - Intermedio
              </option>
              <option value="Italiano - Avanzado">Italiano - Avanzado</option>
              <option value="Ruso - Básico">Ruso - Básico</option>
              <option value="Ruso - Intermedio">Ruso - Intermedio</option>
              <option value="Ruso - Avanzado">Ruso - Avanzado</option>
            </Select>
          </InputGroup>
          <Flex flexFlow="row wrap" gridGap={3}>
            {lenguage.map((val) => (
              <LenguagesComp key={val} value={val} setLenguage={setLenguage} />
            ))}
          </Flex>
          <InputGroup>
            <InputLeftAddon children="Acerca de vos" />
            <Textarea
              maxlength="250"
              placeholder="máx. 250 caracteres"
              maxH="120px"
              value={about}
              onChange={handleAbout}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children="Habilidades" />
            <Input
              placeholder="máx. 150 caracteres"
              maxlength="150"
              value={skills}
              onChange={handleSkills}
            />
          </InputGroup>

          <ExperienceComponent
            experience={experience}
            setExperience={setExperience}
          />
          <SocialMediaComp setSocial={setSocial} social={social} />
          <SelectColorComp setColorId={setColor} />
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
          zIndex="99"
          cursor="pointer"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Text onClick={sendData} color="#000" variant="paragraph">
            Confirmar
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};
