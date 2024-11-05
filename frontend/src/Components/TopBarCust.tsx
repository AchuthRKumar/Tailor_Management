// src/components/TopBar.tsx
import React, { useEffect, useState } from 'react';
import { Stack, Flex, Heading, HStack, Button, Text,  } from '@chakra-ui/react';
import { Avatar } from './ui/avatar';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../UserContext';
import axios from 'axios';

interface CustomerData {
  name: string,
  email: string,
  password: string,
  phone: string,
  firebaseUid: string,
  role: string
}

const TopBarCust: React.FC = () => {
  
  const { user, logout } = useUserContext();
  const [customerdata, setCustomerData] = useState<CustomerData | null>(null);

  const navigate = useNavigate() ;

  useEffect( () => {
    const fetchCustomer = async () => {
    if(user?.firebaseUid) {
      try{
        const res = await axios.get(`http://localhost:5010/api/customer/uid/${user?.firebaseUid}`);
        setCustomerData(res.data);
      } catch(e){
        console.error("Error fetching customer data");
      }
    }
  };
  fetchCustomer();
}, [user?.firebaseUid]);

  const handleShops = () => {
    navigate('/shops');
  }

  const handleHome = () => {
    navigate('/customerhome');
  }
  return (
    <Flex as="header" padding="1rem" bg="teal.500" color="white" justifyContent="space-between">
      <Heading as="h2"  fontFamily="Newsreader" fontSize="2rem">TAILORNEST</Heading>
      <HStack>
        <Button variant="link" color="black" onClick={handleHome}>Home</Button>
        <Button variant="link" color="black" onClick={handleShops}>Shops</Button>
        <Avatar size="xs" name={customerdata?.name} variant="solid" />
        <Stack gap="0">
            <Text fontWeight="medium">{customerdata?.name}</Text>
          </Stack>
      </HStack>
    </Flex>
  );
};

export default TopBarCust;
