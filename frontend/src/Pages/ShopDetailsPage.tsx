"use client"

import React, { useEffect, useState } from 'react';
import { Spinner, Center, Text, Box, Button, VStack } from '@chakra-ui/react';
import { toaster } from "../Components/ui/toaster"
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Components/Footer';
import TopBarCust from '../Components/TopBarCust';

const ShopDetailsPage = () => {
  const { tailorId } = useParams();
  const {dress} = useParams();
  const navigate = useNavigate();
  const [tailor, setTailor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTailorDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5010/api/tailor/${tailorId}`);
        setTailor(response.data);
      } catch (err) {
        setError('Error fetching tailor details');
      } finally {
        setLoading(false);
      }
    };

    fetchTailorDetails();
  }, [tailorId]);

  const handlePlaceOrder = async () => {
    const orderData = {
      customerId: 'customer123', 
      tailorId: tailorId,
      deliveryDate: new Date(),
      orderStatus: 'Pending',
      amount: (tailor.dress.find(d => d.name === dress)).price.toFixed(2), 
      orderType: 'custom', 
      deliveryType: 'home', 
      dresses: [dress], 
    };

    const response = await axios.post('http://localhost:5010/api/order/', orderData);
  };

  if (loading) {
    return (
      <Center height="100vh">
        <Spinner size="xl" />
      </Center>
    );
  }

  if (error) {
    return (
      <Center height="100vh">
        <Text color="red.500" fontSize="lg">{error}</Text>
      </Center>
    );
  }

  return (
    <>
      <TopBarCust />
      <Box padding="8" bg="gray.50">
        <Center>
          <VStack spacing="6" width="full" maxWidth="600px" boxShadow="lg" p="6" borderRadius="md" bg="white">
            <Text fontSize="3xl" fontWeight="bold" color="teal.600">{tailor.shopName}</Text>
            <Text fontSize="lg" color="gray.600">{tailor.description || 'No description available.'}</Text>
            <Text fontSize="lg" color="gray.700">{`Rating: ${tailor.rating}`}</Text>
            <Text fontSize="lg" color="gray.700">{`Orders this month: ${tailor.ordersCount}`}</Text>
            <Text fontSize="lg" color="gray.700">{`Location: ${tailor.location || 'Not specified'}`}</Text>
            <Text fontSize="lg" color="gray.700">{`Working Hours: ${tailor.workingHours || 'Not specified'}`}</Text>
            <Text fontSize="lg" color="gray.700">Dress Types Offered: {tailor.dressTypes}</Text>

            <Button colorScheme="teal" onClick={handlePlaceOrder}>Place Order</Button>
            <Button colorScheme="blue" onClick={() =>
                toaster.create({
                  description: "File saved successfully",
                  type: "loading",
                })}>Contact the Tailor</Button>
            <Button variant="outline" onClick={() => navigate(-1)}>Cancel</Button>
          </VStack>
        </Center>
        </Box>
        <Footer />
    </>
  );
};

export default ShopDetailsPage;
