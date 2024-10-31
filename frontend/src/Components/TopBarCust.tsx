// src/components/TopBar.tsx
import React from 'react';
import { Stack, Flex, Heading, HStack, Button, Text,  } from '@chakra-ui/react';
import { Avatar } from './ui/avatar';

const TopBarCust: React.FC = () => {
  return (
    <Flex as="header" padding="1rem" bg="teal.500" color="white" justifyContent="space-between">
      <Heading as="h2"  fontFamily="'Playfair Display', serif" fontSize="2rem">TAILORNEST</Heading>
      <HStack>
        <Button variant="link" color="black">Home</Button>
        <Button variant="link" color="black">Shops</Button>
        <Avatar size="xs" name="User" variant="solid" />
        <Stack gap="0">
            <Text fontWeight="medium">User</Text>
          </Stack>
      </HStack>
    </Flex>
  );
};

export default TopBarCust;
