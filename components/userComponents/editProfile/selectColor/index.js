import { Button } from '@chakra-ui/button';
import { Input, InputGroup } from '@chakra-ui/input';
import { Box, Flex, Text } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';

export const SelectColorComp = ({ setColorId }) => {
  const [colorValue, setColorValue] = useState([]);

  const setColor = (e) => {
    setColorValue(e.target.value);
  };

  useEffect(() => {
    setColorId(colorValue);
  }, [colorValue]);

  return (
    <InputGroup alignItems="center" display="flex" gridGap={3}>
      <Text color="#000" variant="paragraph">
        Color principal
      </Text>
      <Flex
        height="35px"
        width="35px"
        borderRadius="9999px"
        alignItems="center"
        justifyContent="center"
        background="#FED7D7"
      >
        <input type="radio" name="choice" value="#FED7D7" onClick={setColor} />
      </Flex>
      <Flex
        height="35px"
        width="35px"
        borderRadius="9999px"
        alignItems="center"
        justifyContent="center"
        background="#FEEBC8"
      >
        <input type="radio" name="choice" value="#FEEBC8" onClick={setColor} />
      </Flex>
      <Flex
        height="35px"
        width="35px"
        borderRadius="9999px"
        alignItems="center"
        justifyContent="center"
        background="#C6F6D5"
      >
        <input type="radio" name="choice" value="#C6F6D5" onClick={setColor} />
      </Flex>
      <Flex
        height="35px"
        width="35px"
        borderRadius="9999px"
        alignItems="center"
        justifyContent="center"
        background="#B2F5EA"
      >
        <input type="radio" name="choice" value="#B2F5EA" onClick={setColor} />
      </Flex>
      <Flex
        height="35px"
        width="35px"
        borderRadius="9999px"
        alignItems="center"
        justifyContent="center"
        background="#BEE3F8"
      >
        <input type="radio" name="choice" value="#BEE3F8" onClick={setColor} />
      </Flex>
      <Flex
        height="35px"
        width="35px"
        borderRadius="9999px"
        alignItems="center"
        justifyContent="center"
        background="#E9D8FD"
      >
        <input type="radio" name="choice" value="#E9D8FD" onClick={setColor} />
      </Flex>
    </InputGroup>
  );
};
