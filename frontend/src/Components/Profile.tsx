import React, { useState } from 'react';
import { Box, Button, Container, Heading, Text, HStack } from '@chakra-ui/react';
import { Radio, RadioGroup } from "../Components/ui/radio"; // Adjust the import path as necessary


const Profile: React.FC = () => {
    const [status, setStatus] = useState<'open' | 'closed'>('open'); // Status state

    return (
        <>
            <Box>
          <Heading as="h2" size="lg" mb={4} color="teal.500">
            Profile
          </Heading>
          <Box mb={4}>
            <Heading as="h3" size="md" mb={2}>
              My Status
            </Heading>
            <RadioGroup defaultValue="open" onChange={setStatus}>
              <HStack gap="6">
                <Radio value="open">I am Open</Radio>
                <Radio value="closed">I am Closed</Radio>
              </HStack>
            </RadioGroup>
          </Box>
        </Box>
        </>
        
      );
};

export default Profile;