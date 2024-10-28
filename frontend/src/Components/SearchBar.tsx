// src/Components/SearchBar.tsx
import React from 'react';
import { Input, Box } from '@chakra-ui/react';

const SearchBar: React.FC = () => (
  <Box className="search-bar" margin="1rem">
    <Input placeholder="Search for tailors near you..." size="lg" />
  </Box>
);

export default SearchBar;
