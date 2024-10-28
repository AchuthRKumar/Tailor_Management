// src/Components/TopBar.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Heading, Button } from '@chakra-ui/react';
import { Tooltip } from "../Components/ui/tooltip"


const TopBar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <Box as="header" display="flex" justifyContent="space-between" alignItems="center" padding="1rem" bg="teal.500" color="white">
    <Heading as="h1" size="lg">TAILORNEST</Heading>
    <Box>
      <Tooltip content="Click here to Login">
        <Button colorScheme="teal" marginRight="1rem" onClick = {handleLogin}>Login</Button>
      </Tooltip>  
      <Tooltip content="Click here to Register">
      <Button colorScheme="teal" marginRight="1rem" onClick = {handleRegister}>Register</Button>

      </Tooltip>
      
    </Box>
  </Box>
  );
};



export default TopBar;
