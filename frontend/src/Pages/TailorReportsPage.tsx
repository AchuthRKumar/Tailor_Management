// src/pages/TailorReportsPage.tsx
import React from 'react';
import { Box, Container, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import TopBarTailor from '../Components/TopBarTailor';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TailorReportsPage: React.FC = () => {
  const totalOrders = 120;
  const completedOrders = 95;
  const failedOrders = 10;
  const pendingOrders = totalOrders - completedOrders - failedOrders;

  // Sample data for monthly revenue
  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Monthly Revenue ($)',
        data: [500, 700, 800, 650, 900, 1100, 950, 1200, 1050, 980, 1150, 1300],
        backgroundColor: 'rgba(56, 178, 172, 0.6)',
        borderColor: 'rgba(56, 178, 172, 1)',
        borderWidth: 1,
      },
    ],
  };

  const revenueOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
      title: { display: true, text: 'Monthly Revenue Analysis' },
    },
    scales: {
      y: { beginAtZero: true, max: 1500 },
    },
  };

  return (
    <>
       <TopBarTailor />
    <Box bg="gray.50" minH="100vh">
      <Container maxW="container.lg" mt={6} p={4}>
        <Heading as="h1" size="2xl" mb={4} textAlign="center" color="teal.600">
          Tailor Reports Dashboard
        </Heading>

        {/* Summary Dashboard */}
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={4} mb={8}>
          <Box bg="white" p={6} rounded="md" shadow="md" textAlign="center">
            <Text fontSize="lg" fontWeight="bold" color="teal.500">Total Orders</Text>
            <Text fontSize="2xl" fontWeight="bold" mt={2}>{totalOrders}</Text>
          </Box>
          <Box bg="white" p={6} rounded="md" shadow="md" textAlign="center">
            <Text fontSize="lg" fontWeight="bold" color="teal.500">Completed Orders</Text>
            <Text fontSize="2xl" fontWeight="bold" mt={2}>{completedOrders}</Text>
          </Box>
          <Box bg="white" p={6} rounded="md" shadow="md" textAlign="center">
            <Text fontSize="lg" fontWeight="bold" color="teal.500">Failed Orders</Text>
            <Text fontSize="2xl" fontWeight="bold" mt={2}>{failedOrders}</Text>
          </Box>
          <Box bg="white" p={6} rounded="md" shadow="md" textAlign="center">
            <Text fontSize="lg" fontWeight="bold" color="teal.500">Pending Orders</Text>
            <Text fontSize="2xl" fontWeight="bold" mt={2}>{pendingOrders}</Text>
          </Box>
        </SimpleGrid>

        {/* Revenue Chart */}
        <Box bg="white" p={6} rounded="md" shadow="md">
          <Heading as="h2" size="lg" mb={4} color="teal.500">
            Monthly Revenue Analysis
          </Heading>
          <Bar data={revenueData} options={revenueOptions} />
        </Box>
      </Container>
    </Box>
    </>
   
  );
};

export default TailorReportsPage;
