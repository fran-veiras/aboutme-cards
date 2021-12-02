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

export const ThemeOne = ({ avatar, nameUser, about }) => {
  return (
    <Box display="flex" gridGap={3}>
      <Flex gridGap={6}>
        <Flex gridGap={6} minW="160px" flexDir="column" alignItems="center">
          <Image
            src={avatar}
            width="120px"
            height="120px"
            borderRadius="9999px"
          />
          <Flex
            flexDir="column"
            width="full"
            height="full"
            justifyContent="space-between"
            alignItems="center"
          >
            <InstagramIcon />
            <FacebookIcon />
            <CafecitoIcon />
            <GitHubIconCard />
            <LinedinIcon />
            <PatreonIcon />
            <TwitchIcon />
            <TwitterIcon />
            <WebSiteIcon />
            <WhatsAppIcon />
            <YoutubeIcon />
          </Flex>
        </Flex>
        <Box display="flex" gridGap={8} flexDir="column">
          <Heading variant="secondary">{nameUser}</Heading>
          <Text variant="paragraph">{about}</Text>
          <Box>
            <Heading mb={2} variant="subtitles">
              Habilidades
            </Heading>
            <Box
              borderRadius="5px"
              display="inline-block"
              background="#90909050"
              px={2}
            >
              <Text variant="code">HTML5, CSS3, JavaScript, React</Text>
            </Box>
          </Box>
          <Box>
            <Heading mb={2} variant="subtitles">
              Experiencia
            </Heading>
            <Box
              borderRadius="5px"
              display="inline-block"
              background="#90909050"
              px={2}
            >
              <Text variant="code">Coto - 2años | Fullcontact - 1año</Text>
            </Box>
          </Box>
          <Box
            px={10}
            py={5}
            display="flex"
            width="60%"
            background="text"
            borderRadius="7px"
          >
            <Text color="#000" variant="paragraph">
              Contactame por mail!
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
