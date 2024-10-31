import { Box, Button, Stack, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from 'react';
import SearchBar from "../Components/SearchBar";
import TopBarCust from "../Components/TopBarCust";
import axios from 'axios';

const CustomerHomePage: React.FC = () => {
  const [measurements, setMeasurements] = useState({
    height: '',
    waist: '',
    chest: '',
    sleeve: '',
  });

  // Fetch measurements when the component mounts
  useEffect(() => {
    const fetchMeasurements = async () => {
      try {
        const response = await axios.get('http://localhost:5010/api/measurement/customer1');
        console.log("Fetched measurements:", response.data); // Log the response for debugging
        console.log(response.data);
        // Assuming the response data structure is correct
        setMeasurements({
          height: response.data.height || '',
          waist: response.data.waist || '',
          chest: response.data.chest || '',
          sleeve: response.data.sleeve || '',
        });
      } catch (error) {
        console.error("Error fetching measurements:", error);
      }
    };

    fetchMeasurements();
  }, []);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMeasurements((prev) => ({ ...prev, [name]: value }));
  };

  // Save updated measurements
  const handleSaveMeasurements = async () => {
    try {
      await axios.put('http://localhost:5010/api/measurement/customer1', measurements);
      alert("Measurements saved successfully!");
    } catch (error) {
      console.error("Error saving measurements:", error);
      alert("Failed to save measurements. Please try again.");
    }
  };

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

      {/* Measurements Form */}
      <Box bg="white" p={6} rounded="lg" shadow="md">
        <Text fontSize="2xl" fontWeight="bold" mb={4} textAlign="center" color="teal.600">
          Measurements
        </Text>
        <Stack>
          <Input
            name="height"
            placeholder="Height"
            borderColor="teal.500"
            value={measurements.height}
            onChange={handleInputChange}
          />
          <Input
            name="waist"
            placeholder="Waist"
            borderColor="teal.500"
            value={measurements.waist}
            onChange={handleInputChange}
          />
          <Input
            name="chest"
            placeholder="Chest"
            borderColor="teal.500"
            value={measurements.chest}
            onChange={handleInputChange}
          />
          <Input
            name="sleeve"
            placeholder="Sleeve"
            borderColor="teal.500"
            value={measurements.sleeve}
            onChange={handleInputChange}
          />
          <Button colorScheme="teal" size="md" borderRadius="full" onClick={handleSaveMeasurements}>
            Save Measurements
          </Button>
        </Stack>
      </Box>

      {/* Popular Orders Section */}
      <Box bg="white" p={6} rounded="lg" shadow="md" textAlign="center">
        <Text fontSize="2xl" fontWeight="bold" mb={4} color="teal.600">
          Popular Orders
        </Text>
        <Stack direction="row" justify="center">
          <Box flex="1" p={4} bg="gray.50" rounded="md" shadow="sm" textAlign="center">
            <Text fontWeight="bold">Shirts</Text>
          </Box>
          <Box flex="1" p={4} bg="gray.50" rounded="md" shadow="sm" textAlign="center">
            <Text fontWeight="bold">Pants</Text>
          </Box>
          <Box flex="1" p={4} bg="gray.50" rounded="md" shadow="sm" textAlign="center">
            <Text fontWeight="bold">Sarees</Text>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default CustomerHomePage;
