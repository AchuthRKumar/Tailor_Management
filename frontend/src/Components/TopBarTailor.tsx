// src/components/TopBar.tsx
import React from 'react';
import { Box, Flex, Heading, HStack, Button } from '@chakra-ui/react';

const TopBar: React.FC = () => {
  return (
    <Flex as="header" padding="1rem" bg="teal.500" color="white" justifyContent="space-between">
      <Heading size="lg">TailorNest</Heading>
      <HStack spacing={4}>
        <Button variant="link" color="white">Home</Button>
        <Button variant="link" color="white">Contact</Button>
        <Button variant="link" color="white">Reports</Button>
        <Button variant="link" color="white">Profile</Button>
        <Button variant="outline" colorScheme="whiteAlpha">Profile</Button>
      </HStack>
    </Flex>
  );
};

export default TopBar;
