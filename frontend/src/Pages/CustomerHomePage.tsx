import { Box, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from 'react';
import SearchBar from "../Components/SearchBar";
import TopBarCust from "../Components/TopBarCust";
import axios from 'axios';
import DressList from "../Components/DressList";
import Footer from "../Components/Footer";

const CustomerHomePage: React.FC = () => {

  return (
    <>
      <TopBarCust />
      
      <SearchBar />

      {/* Customer Dashboard */}
      <Box bg="white" p={6} rounded="lg" shadow="md">
        <Text fontSize="2xl" fontWeight="bold" mb={4} textAlign="center" color="teal.600">
          Customer Dashboard
        </Text>
        <Stack direction="row">
          <Box flex="1" p={4} bg="gray.50" rounded="md" shadow="sm" textAlign="center">
            <Text fontWeight="bold">Past Orders</Text>
            <Text fontSize="sm" mt={2}>Shirt - Completed</Text>
            <Text fontSize="sm">Pant - Completed</Text>
          </Box>
          <Box flex="1" p={4} bg="gray.50" rounded="md" shadow="sm" textAlign="center">
            <Text fontWeight="bold">Ongoing Orders</Text>
            <Text fontSize="sm" mt={2}>Saree - In Progress</Text>
            <Text fontSize="sm">Blazer - In Progress</Text>
          </Box>
          <Box flex="1" p={4} bg="gray.50" rounded="md" shadow="sm" textAlign="center">
            <Text fontWeight="bold">Notifications</Text>
            <Text fontSize="sm" mt={2}>Order #123 ready for pickup</Text>
            <Text fontSize="sm">Tailor A accepted your order</Text>
          </Box>
        </Stack>
      </Box>


      <DressList />

      <Footer />
    </>
  );
};

export default CustomerHomePage;
