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
    const duration = 2000; // Animation duration in milliseconds
    const intervalTime = 20; // Smaller interval time for smoother animation

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
    <Box className="landing-page">
      <TopBar />

      {/* Enhanced Welcome Box */}
      <Box className="welcome-box" textAlign="center" padding="3rem 2rem">
        <Heading as="h2" size="2xl" className="welcome-title">
          Welcome to TailorNest!
        </Heading>
        <Text fontSize="lg" fontFamily="'Roboto', sans-serif" marginTop="1rem" color="#333">
          Where every stitch tells a story and each creation is unique.
        </Text>
        
        <Text fontSize="md" fontFamily="'Roboto', sans-serif" marginTop="1rem" color="#666" maxWidth="600px" marginX="auto">
          At TailorNest, we bring together skilled artisans and individuals looking for quality and personalization. Whether you're here to find a skilled tailor or showcase your craft, we are dedicated to making your journey seamless and rewarding.
        </Text>

        <Heading as="h2" className="welcome-count" marginTop="5rem" fontSize="3xl" color="#3b82f6">
          {count}+ Registered Tailors
        </Heading>
      </Box>

      {/* Search Bar */}
      <SearchBar />

      {/* Information Boxes */}
      <Box className="info-boxes" display="flex" justifyContent="space-around" marginTop="2rem">
        <Box className="info-box" padding="1.5rem" borderWidth="1px" borderRadius="md" boxShadow="md">
          <Heading as="h3" size="md" color="#3b82f6">About Us</Heading>
          <Text fontSize="sm" color="#666" marginTop="0.5rem">
            Learn more about our mission and values, and what drives us to create.
          </Text>
        </Box>
        <Box className="info-box" padding="1.5rem" borderWidth="1px" borderRadius="md" boxShadow="md">
          <Heading as="h3" size="md" color="#3b82f6">What We Do</Heading>
          <Text fontSize="sm" color="#666" marginTop="0.5rem">
            Discover the tailored services we offer to bring you the best experience.
          </Text>
        </Box>
        <Box className="info-box" padding="1.5rem" borderWidth="1px" borderRadius="md" boxShadow="md">
          <Heading as="h3" size="md" color="#3b82f6">Our Story</Heading>
          <Text fontSize="sm" color="#666" marginTop="0.5rem">
            Read about our journey from humble beginnings to a thriving community.
          </Text>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default LandingPage;
