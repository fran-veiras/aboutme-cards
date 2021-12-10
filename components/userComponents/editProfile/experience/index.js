/* eslint-disable react/no-children-prop */
import { Button } from '@chakra-ui/button';
import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/input';
import { Select } from '@chakra-ui/select';
import React, { useState } from 'react';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';
import { CurrentExp } from './currentExp';
import { Box } from '@chakra-ui/layout';

export const ExperienceComponent = ({ setExperience, experience }) => {
  const [position, setPosition] = useState([]);
  const [years, setYears] = useState([]);

  const handleYears = (e) => {
    setYears(e.target.value);
  };

  const handlePosition = (e) => {
    setPosition(e.target.value);
  };

  function Notif() {
    store.addNotification({
      title: 'Por favor verifique los datos ingresados',
      message: 'Los campos no se pueden encontrar vacios',
      type: 'danger',
      container: 'top-right',
      insert: 'top',
      animationIn: ['animate__animated', 'animate__fadeIn'],
      animationOut: ['animate__animated', 'animate__fadeOut'],
      dismiss: {
        duration: 4000,
        onScreen: true,
      },
    });
  }

  const sendData = () => {
    if (position.length === 0 || years.length === 0) {
      Notif();
    } else {
      experience.length < 10 &&
        setExperience((val) => [...val, { position: position, years: years }]) &
          setPosition('') &
          setYears('');
    }
  };

  return (
    <>
      <InputGroup>
        <InputLeftAddon children="Cargo" />
        <Input
          placeholder="Máx. 10 experiencias"
          maxlength="30"
          value={position}
          onChange={handlePosition}
        />
        <InputLeftAddon children="Años" />
        <Select
          value={years}
          onChange={handleYears}
          placeholder="Elige una opción"
        >
          <option value="-1 año">-1 año</option>
          <option value="1 año">1 año</option>
          <option value="2 años">2 años</option>
          <option value="3 años">3 años</option>
          <option value="4 años">4 años</option>
          <option value="5 años">5 años</option>
          <option value="+5 años">+5 años</option>
        </Select>
        <Button onClick={sendData}>Añadir</Button>
      </InputGroup>
      <Box display="flex" flexFlow="row wrap" gridGap={3}>
        {experience.map((val) => (
          <CurrentExp
            key={val.position}
            value={val}
            experience={experience}
            setExperience={setExperience}
          />
        ))}
      </Box>
    </>
  );
};
