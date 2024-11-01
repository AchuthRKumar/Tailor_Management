// src/components/TopBar.tsx
import React from 'react';
import { Stack, Flex, Heading, HStack, Button, Text, LinkOverlay } from '@chakra-ui/react';
import { Avatar } from './ui/avatar';

const TopBar: React.FC = () => {
  return (
    <Flex as="header" padding="1rem" bg="teal.500" color="white" justifyContent="space-between">
      <Heading as="h2"  fontFamily="Newsreader" fontSize="2rem">TAILORNEST</Heading>
      <HStack spacing={4}>
        <Button variant="link" color="black">Home</Button>
        <Button variant="link" color="black">Reports</Button>
        <Avatar size="xs" name="User" variant="solid" />
        <Stack gap="0">
            <Text fontWeight="medium">User</Text>
            <Text color="fg.muted" textStyle="sm">
              Shop1
            </Text>
          </Stack>
      </HStack>
    </Flex>
  );
};

export default TopBar;
