import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import { EditProfile } from '../../components/userComponents/editProfile';
import { firestore } from '../../firebase/admin';
import editar, { addInfo } from '../../firebase/client';
import useUser from '../../hooks/useUser';

export default function PostPage(props) {
  const user = useUser();
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props);
  }, []);

  console.log(data);

  const surname = 'fran';
  const about = 'nada';

  const onChange = () => {
    editar(user.uid, surname, about);
  };

  // cards
  const [editCard, setEditCard] = useState(false);

  const changeSelect = () => {
    editCard === false && setEditCard(!false);
    editCard === true && setEditCard(!true);
  };

  return (
    <Container
      minWidth={{
        base: '95vw', // 0-48em
        md: '95vw', // 48em-80em,
        xl: '95vw', // 80em+
        '2xl': '65vw',
      }}
      height="100vh"
    >
      {editCard === false && (
        <Flex
          width="full"
          height="full"
          alignItems="center"
          justifyContent="center"
          background="transparent"
        >
          <Flex
            width="80vw"
            height="60vh"
            background="secondary"
            borderRadius="7px"
            boxShadow="md"
            p={8}
            position="relative"
            zIndex="9999"
          >
            <Box display="flex" gridGap={3}>
              <Image
                src={data.avatar}
                width="50px"
                height="50px"
                borderRadius="9999px"
              />
              <Heading>{data.nameUser}</Heading>
            </Box>
            <Button onClick={onChange}>change</Button>
            <Box
              borderRadius="0px 0px 10px 10px"
              position="absolute"
              background="tertiary"
              boxShadow="md"
              width="100px"
              height="50px"
              bottom="-50"
              right="0"
              zIndex="9998"
              cursor="pointer"
              display="flex"
              justifyContent="center"
              alignItems="center"
              onClick={changeSelect}
            >
              <Text color="#000" variant="paragraph">
                Editar
              </Text>
            </Box>
          </Flex>
        </Flex>
      )}
      {editCard === true && (
        <EditProfile editCard={editCard} setEditCard={setEditCard} />
      )}
    </Container>
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

      return { props };
    })
    .catch(() => {
      return {};
    });
}
