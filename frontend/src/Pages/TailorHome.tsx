// src/pages/Home.tsx
import React from 'react';
import { HStack, Stack, Box, Container, Heading, Text } from '@chakra-ui/react';
import OrdersTable from '../Components/OrderTailor';
import TopBarTailor from '../Components/TopBarTailor';
import ReportHome from '../Components/ReportHome';
import Footer from '../Components/Footer';
import { RadioCardItem, RadioCardRoot } from "../Components/ui/radio-card";


const TailorHome: React.FC = () => {
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
            <ReportHome />
          </Box>
        </Stack>
      </Container>

      <Footer />
    </Box>
  );
};

export default TailorHome;
