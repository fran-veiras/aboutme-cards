import { Box, Text } from '@chakra-ui/layout';
import React from 'react';

export const ExperienceComp = ({ value }) => {
  return (
    <Box
      borderRadius="5px"
      display="inline-block"
      background="#90909050"
      px={2}
    >
      <Text variant="code">
        {value.position + ' ' + '|' + ' ' + value.years}
      </Text>
    </Box>
  );
};
