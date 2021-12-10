import { CloseIcon } from '@chakra-ui/icons';
import { Box, Text } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/react';
import React from 'react';

export const CurrentExp = ({ value, setExperience }) => {
  function deletePosition() {
    setExperience((item) =>
      item.filter((item) => item.position !== value.position)
    );
  }

  return (
    <Box
      display="inline"
      alignItems="center"
      justifyContent="space-between"
      background="gray.100"
      px={5}
      py={1}
      borderRadius="9999px"
      gridGap={3}
    >
      <Flex alignItems="center" gridGap={3} justifyContent="space-between">
        <Text color="#000" variant="paragraph">
          {value.position.length > 15 && value.position.substr(0, 10)}
          {value.position.length < 15 && value.position}
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
      </Flex>
    </Box>
  );
};
