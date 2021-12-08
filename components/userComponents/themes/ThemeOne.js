import { Image } from '@chakra-ui/image';
import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import CafecitoIcon from '../../../public/icons/cafecito';
import FacebookIcon from '../../../public/icons/facebook';
import GitHubIconCard from '../../../public/icons/github';
import InstagramIcon from '../../../public/icons/instagram';
import LinedinIcon from '../../../public/icons/linkedin';
import PatreonIcon from '../../../public/icons/patreon';
import TwitchIcon from '../../../public/icons/Twitch';
import TwitterIcon from '../../../public/icons/twitter';
import WebSiteIcon from '../../../public/icons/website';
import WhatsAppIcon from '../../../public/icons/whatsApp';
import YoutubeIcon from '../../../public/icons/youtube';
import { ExperienceComp } from './experience';
import { LanguagesComp } from './languages';
import { SocialIconsComp } from './social';

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
}) => {
  const social =
    socialData !== undefined && socialData !== null && socialData[0];

  return (
    <Box display="flex" gridGap={3} width="full">
      <Flex flexDir="column" width="full">
        <Flex
          p={10}
          gridGap={6}
          flexDir="row"
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

            <Box mt={3} display="flex" gridGap={3}>
              {exp !== undefined &&
                exp.map((val) => (
                  <ExperienceComp key={val.position} value={val} />
                ))}
            </Box>
            <Box mt={3} display="flex" gridGap={3}>
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
