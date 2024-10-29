// src/components/OrdersTable.tsx
import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box } from '@chakra-ui/react';

const OrdersTable: React.FC = () => {
  const orders = [
    { customer: 'John Doe', deadline: '2024-11-01', status: 'Pending' },
    { customer: 'Jane Smith', deadline: '2024-11-03', status: 'Completed' },
    { customer: 'Mark Johnson', deadline: '2024-11-05', status: 'In Progress' },
  ];

  return (
    <Box padding="1rem" borderWidth="1px" borderRadius="md" bg="white" shadow="md">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Customer</Th>
            <Th>Deadline</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders.map((order, index) => (
            <Tr key={index}>
              <Td>{order.customer}</Td>
              <Td>{order.deadline}</Td>
              <Td>{order.status}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default OrdersTable;
