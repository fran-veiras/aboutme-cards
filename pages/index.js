import { Container } from '@chakra-ui/react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { CreateAccount } from '../components/main/CreateAccount.js';
import { MainContentPort } from '../components/main/MainContentPort';
import { TemasEditables } from '../components/main/TemasEditables/index.js';
import { NavBar } from '../components/NavBar';
import useUser from '../hooks/useUser.js';

export default function Home() {
  const user = useUser();

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    user && setUserData(user);
  }, []);

  return (
    <Container
      maxW="100vw"
      height="100%"
      background="secondary"
      margin="0px"
      padding="0px"
    >
      <NavBar userData={userData} />
      <Container
        minWidth={{
          base: '95vw', // 0-48em
          md: '95vw', // 48em-80em,
          xl: '95vw', // 80em+
          '2xl': '65vw',
        }}
        padding="0px"
      >
        <MainContentPort />
        <CreateAccount />
        <TemasEditables />
      </Container>
    </Container>
  );
}
