import { CloseIcon } from '@chakra-ui/icons';
import { Box, Text } from '@chakra-ui/layout';
import React from 'react';

export const ItemsSocial = ({ value, social, setSocial }) => {
  function deleteSocial() {
    Object.values(social[0]).map((item) => {
      item === social[0][value] &&
        setSocial((val) => [...val, (val[0][value] = '')]);
    });
  }

  return (
    <>
      {social[0][value].length !== 0 && (
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
            {social[0][value].length > 45 && social[0][value].substr(0, 30)}
            {social[0][value].length < 45 && social[0][value].substr(0, 30)}
          </Text>
          <CloseIcon
            onClick={deleteSocial}
            cursor="pointer"
            marginLeft={2}
            width="14px"
            height="14px"
          />
        </Box>
      )}
    </>
  );
};
