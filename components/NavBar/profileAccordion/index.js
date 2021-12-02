import React from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/accordion';
import { Divider, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';

export const ProfileAcordion = ({ user }) => {
  return (
    <Accordion
      width="140px"
      position="relative"
      zIndex="9999"
      height="full"
      allowToggle
    >
      <AccordionItem border="none">
        <AccordionButton
          _focus={{ outline: 'none' }}
          _hover={{ background: 'none' }}
          flex="1"
          justifyContent="end"
        >
          <Image borderRadius="9999px" width="55px" height="55px" src={user} />
          <AccordionIcon />
        </AccordionButton>

        <AccordionPanel position="absolute" background="#fff" py="10px">
          <Text color="#000" variant="paragraph">
            Inicio
          </Text>
          <Divider />
          <Text color="#000" variant="paragraph">
            Editar card
          </Text>
          <Divider />
          <Text color="#000" variant="paragraph">
            Cerrar sesión
          </Text>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
