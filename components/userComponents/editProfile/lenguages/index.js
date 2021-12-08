import { CloseIcon } from '@chakra-ui/icons';
import { Box, Text } from '@chakra-ui/layout';
import React from 'react';

export const LenguagesComp = ({ value, setLenguage, lenguage }) => {
  function deleteLenguaje() {
    setLenguage((item) => item.filter((item) => item !== value));
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      background="gray.100"
      px={2}
      py={1}
      borderRadius="9999px"
    >
      <Text color="#000" variant="paragraph">
        {value}
      </Text>
      <CloseIcon
        onClick={deleteLenguaje}
        cursor="pointer"
        marginLeft={2}
        width="14px"
        height="14px"
      />
    </Box>
  );
};
