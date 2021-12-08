import { Button } from '@chakra-ui/button';
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/layout';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import { CreateAccount } from '../../components/main/CreateAccount.js';
import { ComponentDuplicated } from '../../components/main/CreateAccount.js/componentDuplicated.js';
import { MainContentPort } from '../../components/main/MainContentPort';
import { NavBar } from '../../components/NavBar';
import {
  addInfo,
  loginWithGitHub,
  loginWithGoogle,
} from '../../firebase/client';
import useUser from '../../hooks/useUser';
import GitHub from '../../public/github';
import GoogleIcon from '../../public/googleIcon';

export default function Login() {
  const user = useUser();
  const router = useRouter();

  const handleGitHubLogin = () => {
    loginWithGitHub().catch((err) => {
      console.log(
        alert(
          'este email ya se encuentra registrado con google, por favor inicia con google'
        )
      );
    }) &&
      user &&
      addInfo({
        avatar: user.avatar,
        email: user.email,
        username: user.username,
        uid: user.uid,
        nameUser: nameUser,
        surname: '',
        about: '',
        social: social,
        exp: [],
        name: '',
        lenguage: [],
        skills: '',
        experience: '',
      });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle().catch((err) => {
      console.log(err);
    }) &&
      user &&
      addInfo({
        avatar: user.avatar,
        email: user.email,
        username: user.username,
        uid: user.uid,
        nameUser: nameUser,
        surname: '',
        about: '',
        social: social,
        exp: [],
        name: '',
        lenguage: [],
        skills: '',
      });
  };

  const social = [
    {
      Linkedin: '',
      Facebook: '',
      Instagram: '',
      Github: '',
      Patreon: '',
      Twitch: '',
      Twitter: '',
      Website: '',
      WhatsApp: '',
      Youtube: '',
      Cafecito: '',
    },
  ];

  const [nameUser, setNameUser] = useState('');

  return (
    <>
      <NavBar />
      <Container
        minWidth={{
          base: '95vw', // 0-48em
          md: '95vw', // 48em-80em,
          xl: '95vw', // 80em+
          '2xl': '65vw',
        }}
        justifyContent="center"
        height="80vh"
        mt={10}
      >
        <ComponentDuplicated setNameUser={setNameUser} />
        <Flex textAlign="center" flexDir="column" gridGap={5}>
          <Heading color="primary" variant="secondary">
            Nos alegra verte aquí.
          </Heading>
          <Heading color="primary" variant="subtitles">
            Continuemos...
          </Heading>
          <Flex gridGap={3} justifyContent="center">
            <Button
              onClick={handleGitHubLogin}
              background="secondary"
              color="#fff"
            >
              Login con GitHub <GitHub />
            </Button>
            <Button
              onClick={handleGoogleLogin}
              background="secondary"
              color="#fff"
            >
              Login con Google <GoogleIcon />
            </Button>
          </Flex>
        </Flex>
      </Container>
    </>
  );
}
