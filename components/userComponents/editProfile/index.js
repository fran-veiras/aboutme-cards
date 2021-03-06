/* eslint-disable react/no-children-prop */
import { Image } from '@chakra-ui/image';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import { Input, SelectField, Spinner } from '@chakra-ui/react';
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

  const [spinner, setSpinner] = useState(false);

  const changeSelectFunc = () => {
    reloadData() & setSpinner(true);
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
              placeholder="Elige una opci??n"
            >
              <option value="Ingl??s - B??sico">Ingl??s - B??sico</option>
              <option value="Ingl??s - Intermedio">Ingl??s - Intermedio</option>
              <option value="Ingl??s - Avanzado">Ingl??s - Avanzado</option>
              <option value="Franc??s - B??sico">Franc??s - B??sico</option>
              <option value="Franc??s - Intermedio">Franc??s - Intermedio</option>
              <option value="Franc??s - Avanzado">Franc??s - Avanzado</option>
              <option value="Portugu??s - B??sico">Portugu??s - B??sico</option>
              <option value="Portugu??s - Intermedio">
                Portugu??s - Intermedio
              </option>
              <option value="Portugu??s - Avanzado">Portugu??s - Avanzado</option>
              <option value="Alem??n - B??sico">Alem??n - B??sico</option>
              <option value="Alem??n - Intermedio">Alem??n - Intermedio</option>
              <option value="Alem??n - Avanzado">Alem??n - Avanzado</option>
              <option value="Italiano - B??sico">Italiano - B??sico</option>
              <option value="Italiano - Intermedio">
                Italiano - Intermedio
              </option>
              <option value="Italiano - Avanzado">Italiano - Avanzado</option>
              <option value="Ruso - B??sico">Ruso - B??sico</option>
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
              placeholder="m??x. 250 caracteres"
              maxH="120px"
              value={about}
              onChange={handleAbout}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children="Habilidades" />
            <Input
              placeholder="m??x. 150 caracteres"
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
          onClick={sendData}
        >
          {spinner === false && (
            <Text color="#000" variant="paragraph">
              Confirmar
            </Text>
          )}
          {spinner === true && <Spinner />}
        </Box>
      </Flex>
    </Flex>
  );
};
