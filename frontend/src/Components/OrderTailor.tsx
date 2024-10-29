// src/components/OrdersTable.tsx
import React from 'react';
import { Table, Center, Heading } from '@chakra-ui/react';
import { SegmentedControl } from "../Components/ui/segmented-control"
import { Card } from "@chakra-ui/react"



const OrdersTailor: React.FC = () => {
  const items = [
    { id: 1, name: "Laptop", category: "Electronics", price: 999.99 },
    { id: 2, name: "Coffee Maker", category: "Home Appliances", price: 49.99 },
    { id: 3, name: "Desk Chair", category: "Furniture", price: 150.0 },
    { id: 4, name: "Smartphone", category: "Electronics", price: 799.99 },
    { id: 5, name: "Headphones", category: "Accessories", price: 199.99 },
  ]
  const disable = false;

  return (
    <Center>
         <Card.Root width="600px" >
           <Center> <Heading size="lg" >Orders to Complete</Heading> </Center>
           
      <Card.Body gap="2">
      <Table.Root size="sm" variant="outline" striped="true" showColumnBorder="true" colorPalette="accent" width="50%">
    <Table.Header>
      <Table.Row>
        <Table.ColumnHeader>Customer</Table.ColumnHeader>
        <Table.ColumnHeader>Deadline</Table.ColumnHeader>
        <Table.ColumnHeader >Status</Table.ColumnHeader>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {items.map((item) => (
        <Table.Row key={item.id}>
          <Table.Cell>{item.name}</Table.Cell>
          <Table.Cell>{item.category}</Table.Cell>
          <Table.Cell >
          <SegmentedControl colorPalette defaultValue="Pending" items={[{label: "Pending",value:"Pending", disabled: disable}, "Accepted", "Completed",{label: "Cancel", value:"Cancel"} ]} />
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
