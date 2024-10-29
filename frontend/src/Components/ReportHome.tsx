// src/components/EmptyBox.tsx
import React from 'react';
import { Box } from '@chakra-ui/react';

const EmptyBox: React.FC = () => {
  return (
    <Box padding="1rem" borderWidth="1px" borderRadius="md" bg="white" shadow="md" height="200px">
      {/* Future content will go here */}
      <p style={{ textAlign: 'center', marginTop: '80px', color: 'gray' }}>Future content will be here.</p>
    </Box>
  );
};

export default EmptyBox;
