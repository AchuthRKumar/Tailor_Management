// src/pages/Home.tsx
import React from 'react';
import { Box } from '@chakra-ui/react';
import OrdersTable from '../components/OrdersTable';
import EmptyBox from '../components/EmptyBox';
import Layout from '../components/Layout';

const TailorHome: React.FC = () => {
  return (
    <Layout>
      <Box marginBottom="2rem">
        <OrdersTable />
      </Box>
      <EmptyBox />
    </Layout>
  );
};

export default TailorHome;
