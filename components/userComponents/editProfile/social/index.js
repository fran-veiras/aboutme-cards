/* eslint-disable react/no-children-prop */
import { Button } from '@chakra-ui/button';
import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/input';
import { Select } from '@chakra-ui/select';
import React, { useState } from 'react';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';
import { ItemsSocial } from './items';
import { Flex } from '@chakra-ui/react';

export const SocialMediaComp = ({ setSocial, social }) => {
  const [value, setValue] = useState([]);
  const [URL, setURL] = useState([]);

  const handleSocial = (e) => {
    setValue(e.target.value);
  };

  const handleUrl = (e) => {
    setURL(e.target.value);
  };

  function Notif() {
    store.addNotification({
      title: 'Por favor verifique los datos ingresados',
      message:
        'Los campos no se pueden encontrar vacios y deben contener el protocolo https',
      type: 'danger',
      container: 'top-right',
      insert: 'top',
      animationIn: ['animate__animated', 'animate__fadeIn'],
      animationOut: ['animate__animated', 'animate__fadeOut'],
      dismiss: {
        duration: 5000,
        onScreen: true,
      },
    });
  }

  const sendData = () => {
    if (value.length === 0 || URL.length === 0) {
      Notif();
    } else if (URL.includes('https://')) {
      (social[0][value] = URL) & setValue('') & setURL('');
    } else {
      Notif();
    }
  };

  return (
    <>
      <InputGroup>
        <InputLeftAddon children="Redes" />
        <Select
          value={value}
          onChange={handleSocial}
          placeholder="Elige una opción"
        >
          <option value="Linkedin">Linkedin</option>
          <option value="Facebook">Facebook</option>
          <option value="Instagram">Instagram</option>
          <option value="Github">Github</option>
          <option value="Patreon">Patreon</option>
          <option value="Twitch">Twitch</option>
          <option value="Twitter">Twitter</option>
          <option value="Website">Website</option>
          <option value="WhatsApp">WhatsApp</option>
          <option value="Youtube">Youtube</option>
          <option value="Cafecito">Cafecito</option>
        </Select>
        <InputLeftAddon children="URL" />
        <Input value={URL} onChange={handleUrl} />
        <Button onClick={sendData}>Añadir</Button>
      </InputGroup>
      <Flex gridGap={3}>
        {social[0] !== undefined &&
          social[0] !== null &&
          Object.keys(social[0]).map((val) => (
            <ItemsSocial
              key={val}
              value={val}
              social={social}
              setSocial={setSocial}
            />
          ))}
      </Flex>
    </>
  );
};
