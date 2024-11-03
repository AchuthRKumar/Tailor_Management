import { Box, Stack, Text, Button, Container, Table } from "@chakra-ui/react";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from "../Components/SearchBar";
import TopBarCust from "../Components/TopBarCust";
import DressList from "../Components/DressList";
import Footer from "../Components/Footer";
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "../Components/ui/drawer";
import { EmptyState } from "../Components/ui/empty-state"; // Adjust the import path as necessary
import { LuShoppingCart } from "react-icons/lu";

const CustomerHomePage: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<'home' | 'dashboard'>('home');
  const [orders, setOrders] = useState<any[]>([]); // Use a proper type here for Order

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(`http://localhost:5010/api/order/customer/customer1`);
        console.log(res);
        setOrders(res.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
        // Handle error appropriately
      }
    };

    if (currentSection === 'dashboard') {
      fetchOrders();
    }
  }, [currentSection]);

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <DressList />;
      case 'dashboard':
        if (orders.length === 0) {
          return (
            <EmptyState
              icon={<LuShoppingCart />}
              title="Your orders are empty"
              description="Explore our products and place your orders"
            />
          );
        } else {
          return (
            <Box>
              <Text fontSize="2xl" fontWeight="bold" mb={4} textAlign="center" color="teal.600">
                Customer Dashboard
              </Text>
              <Table.Root variant="outline">
                <Table.ColumnGroup>
                  <Table.Column htmlWidth="20%" /> 
                  <Table.Column htmlWidth="20%" />
                  <Table.Column htmlWidth="20%" />
                  <Table.Column htmlWidth="30%" />
                  <Table.Column />
                </Table.ColumnGroup>
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeader>Tailor ID</Table.ColumnHeader>
                    <Table.ColumnHeader>Placed Date</Table.ColumnHeader>
                    <Table.ColumnHeader>Delivery Date</Table.ColumnHeader>
                    <Table.ColumnHeader>Dresses</Table.ColumnHeader>
                    <Table.ColumnHeader textAlign="end">Amount</Table.ColumnHeader>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {orders.map(order => (
                    <Table.Row key={order._id}>
                      <Table.Cell>{order.tailorId}</Table.Cell>
                      <Table.Cell>{new Date(order.placedDate).toLocaleDateString()}</Table.Cell>
                      <Table.Cell>{new Date(order.deliveryDate).toLocaleDateString()}</Table.Cell>
                      <Table.Cell>{order.dresses.join(", ")}</Table.Cell>
                      <Table.Cell textAlign="end">{order.amount.toFixed(2)}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Root>
            </Box>
          );
        }
      default:
        return null;
    }
  };

  return (
    <>
      <TopBarCust />
      
      <Container maxW="container.lg" mt={6} p={4}>
        <Stack direction="row" align="center">
          <DrawerRoot placement="start">
            <DrawerTrigger asChild>
              <Button variant="outline" size="sm">
                Menu
              </Button>
            </DrawerTrigger>
            <DrawerBackdrop />
            <DrawerContent offset="4" rounded="md">
              <DrawerHeader>
                <DrawerTitle>Menu</DrawerTitle>
                <DrawerCloseTrigger />
              </DrawerHeader>
              <DrawerBody>
                <Button onClick={() => { setCurrentSection('home'); }} variant="ghost" rounded="md" w="100%" mb={2}>
                  Home
                </Button>
                <Button onClick={() => { setCurrentSection('dashboard'); }} variant="ghost" rounded="md" w="100%">
                  Customer Dashboard
                </Button>
              </DrawerBody>
              <DrawerFooter>
                <DrawerActionTrigger asChild>
                  <Button variant="outline">Close</Button>
                </DrawerActionTrigger>
              </DrawerFooter>
            </DrawerContent>
          </DrawerRoot>

          <SearchBar />
        </Stack>

        {/* Render section based on menu selection */}
        <Box bg="white" p={6} rounded="lg" shadow="md" mt={4}>
          {renderSection()}
        </Box>
      </Container>

      <Footer />
    </>
  );
};

export default CustomerHomePage;
