import { CloseIcon } from '@chakra-ui/icons';
import { Box, Text } from '@chakra-ui/layout';
import React from 'react';

export const CurrentExp = ({ value, setExperience }) => {
  function deletePosition() {
    setExperience((item) =>
      item.filter((item) => item.position !== value.position)
    );
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      background="gray.100"
      px={5}
      py={1}
      borderRadius="9999px"
      gridGap={3}
    >
      <Text color="#000" variant="paragraph">
        {value.position}
      </Text>
      <Text color="#000" variant="paragraph">
        {value.years}
      </Text>
      <CloseIcon
        onClick={deletePosition}
        cursor="pointer"
        marginLeft={2}
        width="14px"
        height="14px"
      />
    </Box>
  );
};
