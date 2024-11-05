import React, { useState } from 'react';
import { Box, Container, Heading, SimpleGrid, Text, Button, Input } from '@chakra-ui/react';
import { Table } from '@chakra-ui/react';
import TopBar from '../Components/TopBar';
import Footer from '../Components/Footer';

const AdminDashboardPage: React.FC = () => {
  // Sample state for users, tailors, and orders
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Client' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Tailor' },
  ]);

  const [tailors, setTailors] = useState([
    { id: 1, name: 'Tailor A', rating: 4.5 },
    { id: 2, name: 'Tailor B', rating: 4.0 },
  ]);

  const [orders, setOrders] = useState([
    { id: 1, clientName: 'John Doe', tailor: 'Tailor A', status: 'Completed', amount: 100, date: '2024-01-15' },
    { id: 2, clientName: 'Jane Smith', tailor: 'Tailor B', status: 'Pending', amount: 150, date: '2024-01-16' },
  ]);

  const [userSearch, setUserSearch] = useState('');
  const [tailorSearch, setTailorSearch] = useState('');
  const [orderSearch, setOrderSearch] = useState('');

  const handleRemoveTailor = (id: number) => {
    setTailors(tailors.filter(tailor => tailor.id !== id));
  };

  return (
    <>
    <TopBar/>
    <Box bg="gray.50" minH="100vh">
      <Container maxW="container.lg" mt={6} p={4}>
        <Heading as="h1" size="2xl" mb={4} textAlign="center" color="teal.600">
          Admin Dashboard
        </Heading>

        {/* Summary Dashboard */}
        <SimpleGrid columns={{ base: 1, md: 3 }} mb={8}>
          <Box bg="white" p={6} rounded="md" shadow="md" textAlign="center">
            <Text fontSize="lg" fontWeight="bold" color="teal.500">Total Users</Text>
            <Text fontSize="2xl" fontWeight="bold" mt={2}>{users.length}</Text>
          </Box>
          <Box bg="white" p={6} rounded="md" shadow="md" textAlign="center">
            <Text fontSize="lg" fontWeight="bold" color="teal.500">Total Tailors</Text>
            <Text fontSize="2xl" fontWeight="bold" mt={2}>{tailors.length}</Text>
          </Box>
          <Box bg="white" p={6} rounded="md" shadow="md" textAlign="center">
            <Text fontSize="lg" fontWeight="bold" color="teal.500">Total Orders</Text>
            <Text fontSize="2xl" fontWeight="bold" mt={2}>{orders.length}</Text>
          </Box>
        </SimpleGrid>

        {/* User Management */}
        <Box mt={10} bg="white" p={6} rounded="md" shadow="md">
          <Heading size="md" mb={4} color="teal.500">User Management</Heading>
          <Input 
            placeholder="Search Users..." 
            mb={4} 
            value={userSearch} 
            onChange={(e) => setUserSearch(e.target.value)} 
          />
          <Table.Root variant="outline">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>Name</Table.ColumnHeader>
                <Table.ColumnHeader>Email</Table.ColumnHeader>
                <Table.ColumnHeader>Role</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {users.filter(user => user.name.toLowerCase().includes(userSearch.toLowerCase())).map(user => (
                <Table.Row key={user.id}>
                  <Table.Cell>{user.name}</Table.Cell>
                  <Table.Cell>{user.email}</Table.Cell>
                  <Table.Cell>{user.role}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Box>

        {/* Tailor Management */}
        <Box mt={10} bg="white" p={6} rounded="md" shadow="md">
          <Heading size="md" mb={4} color="teal.500">Tailor Management</Heading>
          <Input 
            placeholder="Search Tailors..." 
            mb={4} 
            value={tailorSearch} 
            onChange={(e) => setTailorSearch(e.target.value)} 
          />
          <Table.Root variant="outline">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>Name</Table.ColumnHeader>
                <Table.ColumnHeader>Rating</Table.ColumnHeader>
                <Table.ColumnHeader>Actions</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {tailors.filter(tailor => tailor.name.toLowerCase().includes(tailorSearch.toLowerCase())).map(tailor => (
                <Table.Row key={tailor.id}>
                  <Table.Cell>{tailor.name}</Table.Cell>
                  <Table.Cell>{tailor.rating}</Table.Cell>
                  <Table.Cell>
                    <Button colorScheme="red" onClick={() => handleRemoveTailor(tailor.id)}>
                      Remove
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Box>

        {/* Order Management */}
        <Box mt={10} bg="white" p={6} rounded="md" shadow="md">
          <Heading size="md" mb={4} color="teal.500">Order Management</Heading>
          <Input 
            placeholder="Search Orders..." 
            mb={4} 
            value={orderSearch} 
            onChange={(e) => setOrderSearch(e.target.value)} 
          />
          <Table.Root variant="outline">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>Client Name</Table.ColumnHeader>
                <Table.ColumnHeader>Tailor</Table.ColumnHeader>
                <Table.ColumnHeader>Status</Table.ColumnHeader>
                <Table.ColumnHeader>Amount ($)</Table.ColumnHeader>
                <Table.ColumnHeader>Date</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {orders.filter(order => order.clientName.toLowerCase().includes(orderSearch.toLowerCase())).map(order => (
                <Table.Row key={order.id}>
                  <Table.Cell>{order.clientName}</Table.Cell>
                  <Table.Cell>{order.tailor}</Table.Cell>
                  <Table.Cell>{order.status}</Table.Cell>
                  <Table.Cell>{order.amount}</Table.Cell>
                  <Table.Cell>{order.date}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Box>
      </Container>
    </Box>
    <Footer/>
    </>
  );
};

export default AdminDashboardPage;
