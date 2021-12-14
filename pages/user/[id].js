import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import { EditProfile } from '../../components/userComponents/editProfile';
import { ThemeOne } from '../../components/userComponents/themes/ThemeOne';
import { firestore } from '../../firebase/admin';
import editar, { addInfo } from '../../firebase/client';
import useUser from '../../hooks/useUser';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';
import { useRouter } from 'next/dist/client/router';
import { NavBar } from '../../components/NavBar';
import { NavBarCards } from '../../components/NavBar/index copy';
import { Spinner } from '@chakra-ui/react';
import Head from 'next/head';

export default function PostPage(props) {
  const user = useUser();
  const [data, setData] = useState([]);
  const route = useRouter();

  useEffect(() => {
    setData(props);
  }, []);

  useEffect(() => {
    user !== undefined &&
      user !== null &&
      user.uid === data.uid &&
      UpdateSite();
  }, [user]);

  useEffect(() => {
    setData(props);
  }, [props]);

  // working now
  // working now
  // working now

  // cards
  const [editCard, setEditCard] = useState(false);

  const changeSelect = () => {
    editCard === false && setEditCard(!false);
    editCard === true && setEditCard(!true);
  };

  if (route.isFallback)
    return (
      <>
        <h1>Cargando...</h1>
        <Spinner />
      </>
    );

  function UpdateSite() {
    store.addNotification({
      title: 'Importante',
      message:
        'Tenga en cuenta que una vez guarde los cambios es necesario actualizar la página para verlos en pantalla',
      type: 'warning',
      container: 'bottom-right',
      insert: 'top',
      animationIn: ['animate__animated', 'animate__fadeIn'],
      animationOut: ['animate__animated', 'animate__fadeOut'],
      dismiss: {
        duration: 6000,
        onScreen: true,
      },
    });
  }

  return (
    <>
      <NavBarCards />
      <ReactNotification zIndex="9999" />
      <Container
        minWidth="100vw"
        backgroundImage={`${'/back.jpg'}`}
        height={{
          base: '100%', // 0-48em
          md: '100vh', // 48em-80em,
          xl: '100vh', // 80em+
          '2xl': '100vh',
        }}
      >
        <Head>
          <title>AboutMe | {data.name + ' ' + data.surname}</title>
          <link rel="shortcut icon" href="/logo.png" />
        </Head>
        <Box
          width="full"
          height="full"
          position="absolute"
          left="0"
          top="0"
          background={data.color + 59}
        ></Box>
        {editCard === false && (
          <Flex
            width="full"
            height="full"
            alignItems="center"
            justifyContent="center"
            background="transparent"
          >
            <Flex
              wordBreak="break-word"
              width={{
                base: '100vw', // 0-48em
                md: '95vw', // 48em-80em,
                xl: '60vw', // 80em+
                '2xl': '40vw',
              }}
              background={data.color}
              borderRadius="7px 7px 0px 7px"
              boxShadow="md"
              position="relative"
            >
              <ThemeOne
                uid={data.uid}
                avatar={data.avatar}
                nameUser={data.name}
                surname={data.surname}
                about={data.about}
                languages={data.lenguage}
                skills={data.skills}
                exp={data.exp}
                socialData={data.social}
                color={data.color}
                secondaryColor={data.color + '99'}
              />
              {/* <Button onClick={onChange}>change</Button> */}
              {user !== undefined && user !== null && user.uid === data.uid && (
                <Box
                  display={{
                    base: 'none',
                    md: 'flex', // 48em-80em,
                    xl: 'flex', // 80em+
                    '2xl': 'flex',
                  }}
                  borderRadius="0px 0px 10px 10px"
                  position="absolute"
                  background={data.color + '99'}
                  boxShadow="md"
                  width="100px"
                  height="50px"
                  bottom="-50"
                  right="0"
                  zIndex="9998"
                  cursor="pointer"
                  justifyContent="center"
                  alignItems="center"
                  onClick={changeSelect}
                >
                  <Text color="#000" variant="paragraph">
                    Editar
                  </Text>
                </Box>
              )}
            </Flex>
          </Flex>
        )}
        {user !== undefined &&
          user !== null &&
          user.uid === data.uid &&
          editCard === true && (
            <EditProfile
              data={data}
              editCard={editCard}
              setEditCard={setEditCard}
              userId={user.uid}
            />
          )}
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: 'CZ9NqsBpIIVU2Mk9cXZ7Z1Je6Mv1' } }],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { id } = params;

  return firestore
    .collection('users')
    .doc(id)
    .get()
    .then((doc) => {
      const data = doc.data();
      const id = doc.id;
      const { createdAt } = data;

      const props = {
        ...data,
        id,
        createdAt: +createdAt.toDate(),
      };

      return { props, revalidate: 1 };
    })
    .catch(() => {
      return { props: {} };
    });
}
