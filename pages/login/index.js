import { Button } from '@chakra-ui/button';
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import { NavBar } from '../../components/NavBar';
import { NavBarCopy2 } from '../../components/NavBar/index copy 2';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';
import ReactNotification from 'react-notifications-component';
import {
  addInfo,
  loginWithGitHub,
  loginWithGoogle,
} from '../../firebase/client';
import useUser, { USER_STATES } from '../../hooks/useUser';
import GitHub from '../../public/github';
import GoogleIcon from '../../public/googleIcon';

export default function Login() {
  const user = useUser();
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const createCard = () => {
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
        color: '#C6F6D5',
      }) &&
      loading === false &&
      setLoading(!false) & router.replace(`/user/${user.uid}`);
  };

  function AdviceNotification() {
    store.addNotification({
      title: 'Este correo ya se encuentra registrado',
      message: 'Por favor inicie sesión desde el login con Google',
      type: 'warning',
      container: 'top-right',
      insert: 'top',
      animationIn: ['animate__animated', 'animate__fadeIn'],
      animationOut: ['animate__animated', 'animate__fadeOut'],
      dismiss: {
        duration: 6000,
        onScreen: true,
      },
    });
  }

  const handleGitHubLogin = () => {
    loginWithGitHub().catch((err) => {
      AdviceNotification();
    });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle().catch((err) => {
      console.log(err);
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
      <NavBarCopy2 />
      <ReactNotification zIndex="9999" />
      <Container
        minWidth={{
          base: '95vw', // 0-48em
          md: '95vw', // 48em-80em,
          xl: '95vw', // 80em+
          '2xl': '45vw',
        }}
        justifyContent="center"
        height="80vh"
        mt={10}
      >
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
          {user !== USER_STATES.NOT_LOGED && user !== USER_STATES.NOT_KNOWN && (
            <Flex gridGap={3} justifyContent="center" flexDir="column">
              {loading === false && (
                <Button onClick={createCard}>Crear nueva card</Button>
              )}
              {loading === true && (
                <Button onClick={createCard}>
                  <Spinner />
                </Button>
              )}
              {loading === false && (
                <Text>
                  Tenga en cuenta que si ya posee una Card, al usar Crear nueva
                  card puede empezar desde cero*
                </Text>
              )}
              {loading === true && <Text>El sitio se esta generando...</Text>}
            </Flex>
          )}
        </Flex>
      </Container>
    </>
  );
}
