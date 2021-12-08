import { Flex } from '@chakra-ui/layout';
import React from 'react';
import CafecitoIcon from '../../../../public/icons/cafecito';
import FacebookIcon from '../../../../public/icons/facebook';
import GitHubIconCard from '../../../../public/icons/github';
import InstagramIcon from '../../../../public/icons/instagram';
import LinedinIcon from '../../../../public/icons/linkedin';
import PatreonIcon from '../../../../public/icons/patreon';
import TwitchIcon from '../../../../public/icons/Twitch';
import TwitterIcon from '../../../../public/icons/twitter';
import WebSiteIcon from '../../../../public/icons/website';
import WhatsAppIcon from '../../../../public/icons/whatsApp';
import YoutubeIcon from '../../../../public/icons/youtube';

export const SocialIconsComp = ({ social }) => {
  return (
    <Flex
      flexDir="row"
      width="full"
      height="full"
      gridGap={5}
      alignItems="center"
    >
      {social.Instagram !== undefined && social.Instagram.length !== 0 && (
        <a href={social.Instagram}>
          <InstagramIcon />
        </a>
      )}
      {social.Facebook !== undefined && social.Facebook.length !== 0 && (
        <a href={social.Facebook}>
          <FacebookIcon />
        </a>
      )}
      {social.Cafecito !== undefined && social.Cafecito.length !== 0 && (
        <a href={social.Cafecito}>
          <CafecitoIcon />
        </a>
      )}
      {social.Github !== undefined && social.Github.length !== 0 && (
        <a href={social.Github}>
          <GitHubIconCard />
        </a>
      )}
      {social.Linkedin !== undefined && social.Linkedin.length !== 0 && (
        <a href={social.Linkedin}>
          <LinedinIcon />
        </a>
      )}
      {social.Patreon !== undefined && social.Patreon.length !== 0 && (
        <a href={social.Patreon}>
          <PatreonIcon />
        </a>
      )}
      {social.Twitch !== undefined && social.Twitch.length !== 0 && (
        <a href={social.Twitch}>
          <TwitchIcon />
        </a>
      )}
      {social.Twitter !== undefined && social.Twitter.length !== 0 && (
        <a href={social.Twitter}>
          <TwitterIcon />
        </a>
      )}
      {social.Website !== undefined && social.Website.length !== 0 && (
        <a href={social.Website}>
          <WebSiteIcon />
        </a>
      )}
      {social.WhatsApp !== undefined && social.WhatsApp.length !== 0 && (
        <a href={social.WhatsApp}>
          <WhatsAppIcon />
        </a>
      )}
      {social.Youtube !== undefined && social.Youtube.length !== 0 && (
        <a href={social.Youtube}>
          <YoutubeIcon />
        </a>
      )}
    </Flex>
  );
};
