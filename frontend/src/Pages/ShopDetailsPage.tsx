import React, { useEffect, useState } from 'react';
import { Spinner, Center, Stack, Text, Box, Button, VStack } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Components/Footer';
import TopBarCust from '../Components/TopBarCust';

const ShopDetailsPage = () => {
  const { tailorId } = useParams(); // Get the tailorId from the URL
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

            {/* New Content Section */}
            <Text fontSize="lg" color="gray.700">{`Location: ${tailor.location || 'Not specified'}`}</Text>
            <Text fontSize="lg" color="gray.700">{`Working Hours: ${tailor.workingHours || 'Not specified'}`}</Text>
            <Text fontSize="lg" color="gray.700">Dress Types Offered: {tailor.dressTypes}</Text>

            <Button colorScheme="teal" onClick={() => console.log('Contact the tailor')}>Contact the Tailor</Button>
            <Button colorScheme="blue" onClick={() => console.log('Place Order')}>Place Order</Button>
            <Button variant="outline" onClick={() => navigate(-1)}>Cancel</Button> {/* Go back to previous page */}
          </VStack>
        </Center>
        <Footer />
      </Box>
    </>
  );
};

export default ShopDetailsPage;
