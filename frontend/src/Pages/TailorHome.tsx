// src/pages/TailorHomePage.tsx
import React, { useState } from 'react';
import { Box, Button, Container, Heading, Text } from '@chakra-ui/react';
import OrdersTable from '../Components/OrderTailor';
import TopBarTailor from '../Components/TopBarTailor';
import Footer from '../Components/Footer';
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "../Components/ui/drawer";
import Profile from '../Components/Profile';
import { useNavigate } from 'react-router-dom';
import TailorReportsPage from './TailorReportsPage';

const TailorHome: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<'orders' | 'profile' | 'reports'>('orders');
  const navigate = useNavigate();

  const handleReports = () => {
    navigate('/treports');
  }

  const renderSection = () => {
    switch (currentSection) {
      case 'orders':
        return <OrdersTable />;
      case 'profile':
        return <Profile />;
      case 'reports':
        return <TailorReportsPage/>; 
        // return (
        //   // <Box>
        //   //   <Heading as="h2" size="lg" mb={4} color="teal.500">
        //   //     Reports
        //   //   </Heading>
        //   //   <Text mb={4}>Analyze your business performance</Text>
        //   //   <Button colorScheme="teal" onClick={handleReports}>
        //   //     Go to Reports
        //   //   </Button>
        //   // </Box>
        // );
      default:
        return null;
    }
  };

  return (
    <Box bg="gray.50" minH="100vh">
      <TopBarTailor />
      
      <Container maxW="container.lg" mt={6} p={4}>
        <DrawerRoot placement="start">
          <DrawerTrigger asChild>
            <Button colorScheme="teal" mb={4}>
              Open Menu
            </Button>
          </DrawerTrigger>
          <DrawerBackdrop />
          <DrawerContent offset="4" rounded="lg">
            <DrawerHeader>
              <DrawerTitle>Menu</DrawerTitle>
              <DrawerCloseTrigger />
            </DrawerHeader>
            <DrawerBody>
              <Button w="100%" mb={2} rounded="md" variant="ghost" onClick={() => { setCurrentSection('orders'); }}>
                Current Orders
              </Button>
              <Button w="100%" mb={2} rounded="md" variant="ghost" onClick={() => { setCurrentSection('profile'); }}>
                Profile
              </Button>
              <Button w="100%" mb={2} rounded="md" variant="ghost" onClick={() => { setCurrentSection('reports'); }}>
                Reports
              </Button>
            </DrawerBody>
            <DrawerFooter>
              <DrawerActionTrigger asChild>
                <Button variant="surface">Cancel</Button>
              </DrawerActionTrigger>
            </DrawerFooter>
          </DrawerContent>
        </DrawerRoot>

        <Heading as="h1" size="2xl" mb={4} textAlign="center" color="teal.600">
          TAILOR DASHBOARD
        </Heading>
        
        <Box bg="white" p={6} rounded="md" shadow="md">
          {renderSection()}
        </Box>
      </Container>

      <Footer />
    </Box>
  );
};

export default TailorHome;
