import React, { useEffect, useState } from 'react';
import { Spinner, Center, Text, Box, Button, VStack, HStack } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Components/Footer';
import TopBarCust from '../Components/TopBarCust';
import { DialogActionTrigger, DialogBody, DialogCloseTrigger, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogRoot, DialogTrigger } from "../Components/ui/dialog";
import { Fieldset, Input, Stack } from "@chakra-ui/react";
import { Field } from "../Components/ui/field";
import { useUserContext } from '../UserContext';
import { Toaster, toaster } from "../Components/ui/toaster"


const ShopDetailsPage = () => {
  const { user } = useUserContext();
  const { firebaseUidt, dress } = useParams();
  const navigate = useNavigate();
  const [tailor, setTailor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState(0);
  const [error, setError] = useState(null);
  const [showSummary, setShowSummary] = useState(false);
  const [pendingAcceptedCount, setPendingAcceptedCount] = useState(0);
  const [estimatedDeliveryDays, setEstimatedDeliveryDays] = useState(0);
  const [dressM, setdressM] = useState({
    name: dress,
    chest: 0,
    waist: 0,
    len: 0,
    sleeve: 0,
    inseam: 0,
    collar: 0,
    shoulder: 0
  });
  const [reviews, setReviews] = useState([]); // state to hold reviews
  const roundToHalf = (number) => {
    if (number === 0) {
        return 2;
    }
    return Math.round(number * 2) / 2;
};
  

  useEffect(() => {
    const fetchTailorDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5010/api/tailor/uid/${firebaseUidt}`);
        setTailor(response.data[0]);
        const ratingResponse = await axios.get(`http://localhost:5010/api/review/${firebaseUidt}`);
        const ratings = ratingResponse.data;
        const averageRating = ratings.length > 0 
          ? ratings.reduce((sum, review) => sum + review.rating, 0) / ratings.length 
          : 0;

        const roundedRating = roundToHalf(averageRating);
        setRating(roundedRating);

        // Fetch orders to calculate pending/accepted orders count
        const ordersResponse = await axios.get(`http://localhost:5010/api/order/tailor/${firebaseUidt}`);
        
        const pendingAcceptedOrders = ordersResponse.data.filter(order => 
         order.orderStatus === 'Pending' || order.orderStatus === 'Accepted'
     );
     setPendingAcceptedCount(pendingAcceptedOrders.length);
     setEstimatedDeliveryDays(pendingAcceptedCount*2);

        // Fetch reviews
        const reviewsResponse = await axios.get(`http://localhost:5010/api/review/${firebaseUidt}`);
        setReviews(reviewsResponse.data); // set the reviews data
      } catch (err) {
        setError('Error fetching tailor details');
      } finally {
        setLoading(false);
      }
    };

    fetchTailorDetails();
  }, [firebaseUidt]);

  const handleReviewOrder = () => {
    setShowSummary(true);
  };

  const handlePlaceOrder = async () => {
    const orderData = {
      firebaseUidc: user?.firebaseUid,
      firebaseUidt: firebaseUidt,
      shopName: tailor.shopName,
      deliveryDate: new Date(),
      orderStatus: 'Pending',
      amount: (tailor.dress.find(d => d.name === dress)).price.toFixed(2),
      orderType: 'custom',
      deliveryType: 'home',
      dresses: [dress],
    };

    const response = await axios.post('http://localhost:5010/api/order/', orderData);
    
    const measurementData = {
      customerId: orderData.firebaseUidc, 
      orderId: response.data._id,
      dressMeasures: [{
        name: dress,
        chest: dressM.chest,
        waist: dressM.waist,
        length: dressM.len,
        sleeve: dressM.sleeve,
        inseam: dressM.inseam,
        collar: dressM.collar,
        shoulder: dressM.shoulder
      }]
    }

    await axios.post('http://localhost:5010/api/measurement/', measurementData);
    setShowSummary(false); // Close summary dialog after placing the order
    navigate('/customerhome');
  };

  const renderMeasurementFields = () => {
    if (dress === 'Shirts' ||dress === 'Kurta' || dress === 'Sherwani' || dress === 'Suits' || dress ==='Blazers' || dress === 'Salwar Kameez' || dress === 'Lehenga' || dress === 'Churidar Tops') {
      return (
        <>
          <Field label="Collar Size (inches)">
            <Input name="collar" type="number" value={dressM.collar} onChange={(e) => setdressM(prev => ({...prev, collar: Number(e.target.value)}))} />
          </Field>
          <Field label="Dress Length (inches)">
            <Input name="length" type="number" value={dressM.len} onChange={(e) => setdressM(prev => ({...prev, len: Number(e.target.value)}))}/>
          </Field>
          <Field label="Sleeve Length (inches)">
            <Input name="sleeves" type="number" value={dressM.sleeve} onChange={(e) => setdressM(prev => ({...prev, sleeve: Number(e.target.value)}))}/>
          </Field>
          <Field label="Chest Measurement (inches)">
            <Input name="chest" type="number" value={dressM.chest} onChange={(e) => setdressM(prev => ({...prev, chest: Number(e.target.value)}))}/>
          </Field>
          <Field label="Shoulder Width (inches)">
            <Input name="shoulder" type="number" value={dressM.shoulder} onChange={(e) => setdressM(prev => ({...prev, shoulder: Number(e.target.value)}))}/>
          </Field>
        </>
      );
    } else if (dress === 'Pants' || dress === 'Skirts' || dress ==='Palazzo Pants'
    ) {
      return (
        <>
          <Field label="Waist Width (inches)">
            <Input name="waist" type="number" value={dressM.waist} onChange={(e) => setdressM(prev => ({...prev, waist: Number(e.target.value)}))}/>
          </Field>
          <Field label="Inseam Width (inches)">
            <Input name="inseam" type="number" value={dressM.inseam} onChange={(e) => setdressM(prev => ({...prev, inseam: Number(e.target.value)}))}/>
          </Field>
          <Field label="Pant Length (inches)">
            <Input name="length" type="number" value={dressM.len} onChange={(e) => setdressM(prev => ({...prev, len: Number(e.target.value)}))}/>
          </Field>
        </>
      );
    }
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
            <HStack>
              <Text fontSize="3xl" fontWeight="bold" color="teal.600">{tailor.shopName}</Text>
              <Text fontSize="lg" color="gray.600">by {tailor.name}</Text>
            </HStack>
            <Text fontSize="lg" color="gray.700">{`Rating: ${rating}`}</Text>
            <Text fontSize="lg" color="gray.700">{`Estimated days to complete your order: ${estimatedDeliveryDays}`}</Text>

            {/* Display reviews here */}
            <Box mt={4}>
              <Text fontSize="lg" fontWeight="bold">Customer Reviews:</Text>
              {reviews.length > 0 ? (
                <Box mt={2}>
                  {reviews.map((review, index) => (
                    <Box key={index} mb={2} p={3} bg="gray.100" borderRadius="md">
                      <Text fontSize="sm" color="gray.600">{review.comment}</Text>
                      <Text fontSize="sm" color="teal.500">Rating: {review.rating}</Text>
                    </Box>
                  ))}
                </Box>
              ) : (
                <Text color="gray.500">No reviews yet.</Text>
              )}
            </Box>

            <DialogRoot placement="center">
              <DialogTrigger asChild>
                <Button>Place Order</Button>
              </DialogTrigger>
              {!showSummary ? (
                <DialogContent>
                  <DialogHeader><DialogTitle>Enter your measurements</DialogTitle></DialogHeader>
                  <DialogBody>
                    <Fieldset.Root size="lg" maxW="md">
                      <Stack>
                        <Fieldset.HelperText>
                          Please provide the measurements for the {dress}.
                        </Fieldset.HelperText>
                      </Stack>
                      <Fieldset.Content>
                        {renderMeasurementFields()}
                      </Fieldset.Content>
                    </Fieldset.Root>
                  </DialogBody>
                  <DialogFooter>
                    <DialogActionTrigger asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogActionTrigger>
                    <Button onClick={handleReviewOrder}>Review Order</Button>
                  </DialogFooter>
                  <DialogCloseTrigger />
                </DialogContent>
              ) : (
                <DialogContent>
                  <DialogHeader><DialogTitle>Order Summary</DialogTitle></DialogHeader>
                  <DialogBody>
                    <Text fontSize="lg" fontWeight="bold">Dress: {dress}</Text>
                    <Text fontSize="lg">Shop: {tailor.shopName}</Text>
                    <Text fontSize="lg">Cost: {tailor.dress.find(d => d.name === dress)?.price.toFixed(2)}</Text>
                    <Text fontSize="lg" fontWeight="bold">Measurements:</Text>
                    <ul>
                      {Object.entries(dressM).map(([key, value]) => (
                        value > 0 && <li key={key}>{`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value} inches`}</li>
                      ))}
                    </ul>
                  </DialogBody>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setShowSummary(false)}>Back to Edit</Button>
                    <Button onClick={handlePlaceOrder}>Place Order</Button>
                  </DialogFooter>
                </DialogContent>
              )}
            </DialogRoot>
            <HStack>
              <Button>Contact the Tailor</Button>
              <Button variant="outline" onClick={() => navigate(-1)}>Cancel</Button>
            </HStack>
          </VStack>
        </Center>
      </Box>
      <Footer />
    </>
  );
};

export default ShopDetailsPage;
