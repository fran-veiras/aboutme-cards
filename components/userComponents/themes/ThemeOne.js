import { CheckIcon, CopyIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/image';
import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/layout';
import React, { useRef } from 'react';
import { ExperienceComp } from './experience';
import { LanguagesComp } from './languages';
import { SocialIconsComp } from './social';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';

export const ThemeOne = ({
  avatar,
  nameUser,
  about,
  surname,
  languages,
  skills,
  exp,
  socialData,
  secondaryColor,
  color,
  uid,
}) => {
  const social =
    socialData !== undefined && socialData !== null && socialData[0];

  function CopiedSucces() {
    store.addNotification({
      title: 'Hora de compartir tu card ',
      message: 'El link del sitio se copio correctamente',
      type: 'success',
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

  const copyToClipboard = () => {
    const el = document.createElement('input');
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el) & CopiedSucces();
  };

  return (
    <Box
      position="relative"
      display="flex"
      gridGap={3}
      height={{
        base: '100%', // 0-48em
        md: 'full', // 48em-80em,
        xl: 'full', // 80em+
        '2xl': 'full',
      }}
      minWidth={{
        base: '100vw', // 0-48em
        md: 'full', // 48em-80em,
        xl: 'full', // 80em+
        '2xl': 'full',
      }}
    >
      <CopyIcon
        onClick={copyToClipboard}
        width="22px"
        height="22px"
        cursor="pointer"
        position="absolute"
        top="5"
        right="5"
      />
      <Flex flexDir="column" width="full">
        <Flex
          p={10}
          gridGap={6}
          flexDir={{
            base: 'column', // 0-48em
            md: 'row', // 48em-80em,
            xl: 'row', // 80em+
            '2xl': 'row',
          }}
          borderRadius="7px 7px 0px 0px"
          background="#fff"
          alignItems="center"
        >
          <Image
            src={avatar}
            width="150px"
            height="150px"
            borderRadius="9999px"
          />

          <Flex flexDir="column" width="full">
            <Heading color="#000" variant="secondary">
              {nameUser} {surname}
            </Heading>
            {nameUser !== undefined && nameUser.length === 0 && (
              <>
                <Box
                  width="full"
                  height="20px"
                  background={secondaryColor}
                  borderRadius="7px"
                  my={3}
                ></Box>
                <Box
                  width="full"
                  height="20px"
                  background="gray.100"
                  borderRadius="7px"
                ></Box>
              </>
            )}
            <Text color="#000" variant="paragraph">
              {about}
            </Text>
          </Flex>
        </Flex>
        <Box
          display="flex"
          gridGap={6}
          p={10}
          flexDir="column"
          height="full"
          justifyContent="space-between"
          width="full"
        >
          <Box width="full">
            <Heading color="#000" mb={2} variant="subtitles">
              Habilidades
            </Heading>
            {skills !== undefined && skills.length === 0 && (
              <>
                <Box
                  width="full"
                  height="20px"
                  background="gray.100"
                  borderRadius="7px"
                  my={3}
                ></Box>
                <Box
                  width="full"
                  height="20px"
                  background="gray.100"
                  borderRadius="7px"
                ></Box>
              </>
            )}
            <Box
              borderRadius="5px"
              display="inline-block"
              background="#90909050"
              px={2}
            >
              <Text variant="code">{skills}</Text>
            </Box>
          </Box>
          <Box>
            <Heading color="#000" mb={2} variant="subtitles">
              Experiencia
            </Heading>

            <Box mt={3} display="flex" flexFlow="row wrap" gridGap={3}>
              {exp !== undefined &&
                exp.map((val) => (
                  <ExperienceComp key={val.position} value={val} />
                ))}
            </Box>
            <Box flexFlow="row wrap" mt={3} display="flex" gridGap={3}>
              {languages !== undefined &&
                languages.map((val) => <LanguagesComp key={val} value={val} />)}
            </Box>
          </Box>

          <Box
            px={10}
            py={5}
            display="flex"
            background="#fff"
            borderRadius="7px"
          >
            <Text color="#000" variant="paragraph">
              Contactame por mail!
            </Text>
          </Box>
          {social !== undefined && social !== null && (
            <SocialIconsComp social={social} />
          )}
        </Box>
      </Flex>
    </Box>
  );
};
