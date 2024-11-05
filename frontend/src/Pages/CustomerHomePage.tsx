import { Box, Stack, Text, Button, Container, Table } from "@chakra-ui/react";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from "../Components/SearchBar";
import TopBarCust from "../Components/TopBarCust";
import DressList from "../Components/DressList";
import Footer from "../Components/Footer";
import { useUserContext } from '../UserContext'; 
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
  const { user, logout } = useUserContext();
  const [currentSection, setCurrentSection] = useState<'home' | 'dashboard'>('home');
  const [orders, setOrders] = useState<any[]>([]);
  const [tailor, setTailor] = useState<any []>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        console.log(user?.firebaseUid)
        const res = await axios.get(`http://localhost:5010/api/order/customer/${user?.firebaseUid}`);       
        setOrders(res.data)
        console.log(orders)
        const tai = await axios.get(`http://localhost:5010/api/tailor/uid/${orders.firebaseUidc}`);
        setTailor(tai.data);
        console.log(tailor); 
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
                    <Table.ColumnHeader>Shop</Table.ColumnHeader>
                    <Table.ColumnHeader>Placed Date</Table.ColumnHeader>
                    <Table.ColumnHeader>Delivery Date</Table.ColumnHeader>
                    <Table.ColumnHeader>Dresses</Table.ColumnHeader>
                    <Table.ColumnHeader textAlign="end">Amount</Table.ColumnHeader>
                    <Table.ColumnHeader> Order Status</Table.ColumnHeader>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {orders.map(order => (
                    <Table.Row key={order._id}>
                      <Table.Cell>{tailor.name}</Table.Cell>
                      <Table.Cell>{new Date(order.placedDate).toLocaleDateString()}</Table.Cell>
                      <Table.Cell>{new Date(order.deliveryDate).toLocaleDateString()}</Table.Cell>
                      <Table.Cell>{order.dresses.join(", ")}</Table.Cell>
                      <Table.Cell textAlign="end">{order.amount.toFixed(2)}</Table.Cell>
                      <Table.Cell>{order.orderStatus} </Table.Cell>
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
