// src/LandingPage.tsx
import React, { useEffect, useState } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import TopBar from '../Components/TopBar';
import SearchBar from '../Components/SearchBar';
import Footer from '../Components/Footer';

const LandingPage: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let isMounted = true;
    const targetCount = 1000;
    const duration = 300; 
    const intervalTime = 1; 

    const totalSteps = duration / intervalTime;
    const increment = Math.ceil(targetCount / totalSteps);
    let currentCount = 0;

    const interval = setInterval(() => {
      if (isMounted && currentCount < targetCount) {
        currentCount += increment;
        if (currentCount > targetCount) {
          currentCount = targetCount;
        }
        setCount(currentCount);
      } else {
        clearInterval(interval);
      }
    }, intervalTime);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);



  return (
    <Box className='landing-page'>
      <TopBar />
      <Box className='welcome-box' textAlign="center" padding="2rem">
        <Heading as="h2" size="xl">Welcome to TailorNest!</Heading>
        <Text fontSize="lg">Where every stitch has a story!</Text>
        <Heading as="h2" >{count}+ Registered Tailors</Heading>
      </Box>

      <SearchBar />

      <Box className='info-boxes' display="flex" justifyContent="space-around" marginTop="2rem">
        <Box className='info-box' padding="1rem" borderWidth="1px" borderRadius="md">
          <Heading as="h3" size="md">About Us</Heading>
          <Text>Learn more about our mission and values.</Text>
        </Box>
        <Box className='info-box' padding="1rem" borderWidth="1px" borderRadius="md">
          <Heading as="h3" size="md">What We Do</Heading>
          <Text>Discover the services we offer to our customers.</Text>
        </Box>
        <Box className='info-box' padding="1rem" borderWidth="1px" borderRadius="md">
          <Heading as="h3" size="md">Our Story</Heading>
          <Text>Read about our journey and how we started.</Text>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default LandingPage;
