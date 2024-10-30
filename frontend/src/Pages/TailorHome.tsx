// src/pages/TailorHomePage.tsx
import React from 'react';
import { HStack, Stack, Box, Container, Heading, Text, Button } from '@chakra-ui/react';
import OrdersTable from '../Components/OrderTailor';
import TopBarTailor from '../Components/TopBarTailor';
import Footer from '../Components/Footer';
import { RadioCardItem, RadioCardRoot } from "../Components/ui/radio-card";
import { useNavigate } from 'react-router-dom';

const TailorHome: React.FC = () => {
  const navigate = useNavigate();

  const handleReportNavigation = () => {
    navigate('/treports');
  };

  return (
    <Box bg="gray.50" minH="100vh">
      <TopBarTailor />
      
      <Container maxW="container.lg" mt={6} p={4}>
        <Heading as="h1" size="2xl" mb={4} textAlign="center" color="teal.600">
          TAILOR DASHBOARD
        </Heading>
        
        <Stack spacing={8} divider={<Box borderBottom="1px" borderColor="gray.200" />}>
          <Box bg="white" p={6} rounded="md" shadow="md">
            <Heading as="h2" size="lg" mb={4} color="teal.500">
              Current Orders
            </Heading>
            <OrdersTable />
          </Box>

          <Box bg="white" p={6} rounded="md" shadow="md">
            <Heading as="h2" size="lg" mb={4} color="teal.500">
              Tailor Availability
            </Heading>
            <RadioCardRoot size="md" defaultValue="1">
              <HStack spacing={8} justify="center">
                <RadioCardItem label="I am Open" value="1" />
                <RadioCardItem label="I am Closed" value="0" />
              </HStack>
            </RadioCardRoot>
          </Box>

          <Box bg="white" p={6} rounded="md" shadow="md">
            <Heading as="h2" size="lg" mb={4} color="teal.500">
              Reports
            </Heading>
            <Text mb={4}>Analyze your business performance</Text>
            <Button colorScheme="teal" onClick={handleReportNavigation}>
              Go to Reports
            </Button>
          </Box>
        </Stack>
      </Container>

      <Footer />
    </Box>
  );
};

export default TailorHome;
