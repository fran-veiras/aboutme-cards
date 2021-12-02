import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import { EditProfile } from '../../components/userComponents/editProfile';
import { ThemeOne } from '../../components/userComponents/themes/ThemeOne';
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

  const surname = 'Veiras';
  const about =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt turpis nisi, ut finibus ante sodales at. Sed porta enim et arcu dictum ultricies. Cras sed fermentum ex, eget commodo risus. Morbi turpis purus, sollicitudin in auctor id, malesuada non quam. ';

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
            wordBreak="break-word"
            width="80vw"
            height="70vh"
            background="secondary"
            borderRadius="7px 7px 0px 7px"
            boxShadow="md"
            p={10}
            position="relative"
            zIndex="9999"
            justifyContent="center"
          >
            <ThemeOne
              avatar={data.avatar}
              nameUser={data.nameUser}
              about={data.about}
            />
            {/* <Button onClick={onChange}>change</Button> */}
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
