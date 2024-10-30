import React, { useEffect, useState } from 'react';
import { Spinner, Center, Stack, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Components/Footer';

const ShopDetailsPage = () => {
  const { tailorId } = useParams(); // Get the tailorId from the URL
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
    return <Spinner size="xl" />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Center>
      <Stack spacing="4" padding="4">
        <Text fontSize="2xl" fontWeight="bold">{tailor.shopName}</Text>
        <Text fontSize="lg">{tailor.description || 'No description available.'}</Text>
        <Text>{`Rating: ${tailor.rating}`}</Text>
        <Text>{`Orders this month: ${tailor.ordersCount}`}</Text>
        {/* Additional details can be displayed here */}
      </Stack>
      <Footer />
    </Center>
  );
};

export default ShopDetailsPage;
