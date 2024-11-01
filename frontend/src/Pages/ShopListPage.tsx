import React, { useEffect, useState } from 'react';
import { Card, Stack, Spinner, Text, HStack, Center } from '@chakra-ui/react';
import { Avatar } from '../Components/ui/avatar';
import { Button } from '../Components/ui/button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import Footer from '../Components/Footer';
import { Rating } from '../Components/ui/rating';
import SearchBar from '../Components/SearchBar';
import TopBarCust from '../Components/TopBarCust';

const ShopListPage = () => {
  const [tailors, setTailors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchTailors = async () => {
      try {
        const response = await axios.get('http://localhost:5010/api/tailor');
        setTailors(response.data);
      } catch (err) {
        setError('Error fetching tailors');
      } finally {
        setLoading(false);
      }
    };

    fetchTailors();
  }, []);

  if (loading) {
    return <Spinner size="xl" />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handlePlaceOrder = (tailorId) => {
    navigate(`/shop/${tailorId}`); // Use navigate to go to ShopDetailsPage
  };

  return (
    <>
      <TopBarCust />

      <SearchBar />
      <Center width="100%">
        <Stack gap="4" direction="row" wrap="wrap" maxWidth="1000px" width="100%">
          {tailors.map((tailor) => (
            <Card.Root width="320px" variant="subtle" key={tailor._id} shadow="lg">
              <Card.Body gap="2">
                <HStack>
                  <Avatar
                    name={tailor.name}
                    size="lg"
                    shape="rounded"
                  />
                  <Card.Title mb="2">{tailor.shopName}</Card.Title>
                </HStack>
                <Card.Description>
                  {`Orders this month: ${tailor.ordersCount}`}
                </Card.Description>
                <Rating value={tailor.rating} readOnly />
              </Card.Body>
              <Card.Footer justifyContent="flex-end">
                <Button variant="outline" onClick={() => handlePlaceOrder(tailor._id)}>
                  Place Order
                </Button>
              </Card.Footer>
            </Card.Root>
          ))}
        </Stack>
      </Center>
      <Footer />
    </>
  );
};

export default ShopListPage;
