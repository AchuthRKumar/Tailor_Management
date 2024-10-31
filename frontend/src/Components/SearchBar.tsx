// src/Components/SearchBar.tsx
import React from 'react';
import { Input, Box, Flex } from '@chakra-ui/react';
import { IconButton } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

const SearchBar: React.FC = () => (
  <Box margin="1rem">
    <Flex>
      <Input
        placeholder="Find tailors near me"
        size="lg"
        bg="white"
        borderRadius="full"
        shadow="sm"
        _hover={{ bg: "gray.50" }}
        flex="1" // This makes the input take available space
      />
      <IconButton 
        size="lg" 
        aria-label="Search database" 
        variant="ghost" 
        ml={2} // Adds a little margin to the left
      >
        <LuSearch />
      </IconButton>
    </Flex>
  </Box>
);

export default SearchBar;
