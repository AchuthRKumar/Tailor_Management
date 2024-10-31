// src/components/OrdersTable.tsx
import React, { useEffect, useState } from 'react';
import { Table, Center, Heading } from '@chakra-ui/react';
import { SegmentedControl } from "../Components/ui/segmented-control";
import { Card } from "@chakra-ui/react";
import axios from 'axios';

const OrdersTailor: React.FC = () => {
  const [orders, setOrders] = useState([]); // Initialize orders as an empty array

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:5010/api/order/tailor/tailor1'); // Replace with your actual API endpoint
        setOrders(response.data); // Ensure response.data is an array
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <Center>
      <Card.Root width="600px">
        <Center>
          <Heading size="lg">Orders to Complete</Heading>
        </Center>
        <Card.Body gap="2">
          <Table.Root size="sm" variant="outline" striped="true" showColumnBorder="true" colorPalette="accent" width="100%">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>Customer</Table.ColumnHeader>
                <Table.ColumnHeader>Placed On</Table.ColumnHeader>
                <Table.ColumnHeader>Deadline</Table.ColumnHeader>
                <Table.ColumnHeader>Order Status</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {orders.map((order) => (
                <Table.Row key={order.id}>
                  <Table.Cell>{order.customerId}</Table.Cell>
                  <Table.Cell>{new Date(order.placedDate).toLocaleDateString()}</Table.Cell>
                  <Table.Cell>{new Date(order.deliveryDate).toLocaleDateString()}</Table.Cell>
                  <Table.Cell>
                    <SegmentedControl
                      defaultValue={order.orderStatus}
                      items={[
                        { label: "Pending", value: "Pending" },
                        { label: "Accepted", value: "Accepted" },
                        { label: "Completed", value: "Completed" },
                        { label: "Cancel", value: "Cancel" }
                      ]}
                    />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Card.Body>
      </Card.Root>
    </Center>
  );
};

export default OrdersTailor;
