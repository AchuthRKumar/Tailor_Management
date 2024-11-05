import React, { useEffect, useState } from 'react';
import { Spinner, Center, Text, Box, Button, VStack } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Components/Footer';
import TopBarCust from '../Components/TopBarCust';
import { DialogActionTrigger, DialogBody, DialogCloseTrigger, DialogContent, DialogFooter, DialogHeader, DialogRoot, DialogTitle, DialogTrigger, } from "../Components/ui/dialog"
import { Fieldset, Input, Stack } from "@chakra-ui/react"
import { Field } from "../Components/ui/field"

const ShopDetailsPage = () => {
  const { tailorId } = useParams();
  const { dress } = useParams();
  const navigate = useNavigate();
  const [tailor, setTailor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dressM, setdressM] = useState({
    name: dress,
    chest: 0,
    waist: 0,
    len: 0,
    sleeve: 0,
    inseam: 0,
    collar: 0,
    shoulder: 0
  }
  );


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
    
    const measurementData = {
      customerId: orderData.customerId, 
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

    const res = await axios.post('http://localhost:5010/api/measurement/', measurementData);
    if(!res){
      console.log("error");
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
            <Text fontSize="3xl" fontWeight="bold" color="teal.600">{tailor.shopName}</Text>
            <Text fontSize="lg" color="gray.600">{tailor.description || 'No description available.'}</Text>
            <Text fontSize="lg" color="gray.700">{`Rating: ${tailor.rating}`}</Text>
            <Text fontSize="lg" color="gray.700">{`Orders this month: ${tailor.ordersCount}`}</Text>
            <Text fontSize="lg" color="gray.700">{`Location: ${tailor.location || 'Not specified'}`}</Text>
            <Text fontSize="lg" color="gray.700">{`Working Hours: ${tailor.workingHours || 'Not specified'}`}</Text>
            <Text fontSize="lg" color="gray.700">Dress Types Offered: {tailor.dressTypes}</Text>

            <DialogRoot placement="center">
              <DialogTrigger asChild>
                <Button>Place Order</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader><DialogTitle>Enter your measurements</DialogTitle></DialogHeader>

                <DialogBody>
                  <Fieldset.Root size="lg" maxW="md">
                    <Stack>
                      <Fieldset.HelperText>
                        Please provide the measurements for the dress to be stitched.
                      </Fieldset.HelperText>
                    </Stack>

                    <Fieldset.Content>
                      <Field label="Collar Size (inches)">
                        <Input
                          name="collar"
                          type="number"
                          value={dressM.collar}
                          onChange={(e) => setdressM(prevState => ({...prevState, collar: Number(e.target.value)}))}
                        />
                      </Field>

                      <Field label="Dress Length (inches)">
                        <Input name="length" type="number" value={dressM.len}  onChange={(e) => setdressM(prevState => ({...prevState, len: Number(e.target.value)}))}/>
                      </Field>

                      <Field label="Sleeve Length (inches)">
                        <Input name="sleeves" type="number" value={dressM.sleeve} onChange={(e) => setdressM(prevState => ({...prevState, sleeve: Number(e.target.value)}))}/>
                      </Field>

                      <Field label="Chest Measurement (inches)">
                        <Input name="chest" type="number" value={dressM.chest} onChange={(e) => setdressM(prevState => ({...prevState, chest: Number(e.target.value)}))}/>
                      </Field>

                      <Field label="Shoulder Width (inches)">
                        <Input name="shoulder" type="number" value={dressM.shoulder} onChange={(e) => setdressM(prevState => ({...prevState, shoulder: Number(e.target.value)}))}/>
                      </Field>
                    </Fieldset.Content>
                  </Fieldset.Root>
                </DialogBody>
                <DialogFooter>
                  <DialogActionTrigger asChild>
                    <Button variant="outline" >Cancel</Button>
                  </DialogActionTrigger>
                  <Button onClick={handlePlaceOrder}>Place Order</Button>
                </DialogFooter>
                <DialogCloseTrigger />
              </DialogContent>
            </DialogRoot>
            <Button >Contact the Tailor</Button>
            <Button variant="outline" onClick={() => navigate(-1)}>Cancel</Button>
          </VStack>
        </Center>
        </Box>
        <Footer />
    </>
  );
};

export default ShopDetailsPage;
