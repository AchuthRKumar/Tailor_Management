import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, Button, Stack, Flex } from '@chakra-ui/react';
import TopBar from '../Components/TopBar';
import SearchBar from '../Components/SearchBar';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };
  const [count, setCount] = useState(0);

  useEffect(() => {
    let isMounted = true;
    const targetCount = 1000;
    const duration = 2000;
    const intervalTime = 20;
    const totalSteps = duration / intervalTime;
    const increment = Math.ceil(targetCount / totalSteps);
    let currentCount = 0;

    const interval = setInterval(() => {
      if (isMounted && currentCount < targetCount) {
        currentCount += increment;
        if (currentCount > targetCount) currentCount = targetCount;
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
    <Box className="landing-page" bgGradient="linear(to-r, #f7fafc, #edf2f7)">
      <TopBar />
      <SearchBar />

      {/* Enhanced Welcome Box */}
      <Box
        className="welcome-box"
        textAlign="center"
        padding="4rem 2rem"
        borderRadius="lg"
        boxShadow="xl"
        bg="white"
        mx="auto"
        maxW="800px"
        mt="6"
        transition="transform 0.3s ease"
        _hover={{ transform: 'scale(1.02)' }}
      >
        <Heading as="h2" size="2xl" color="#3b82f6">
          Welcome to TailorNest!
        </Heading>
        <Text fontSize="lg" fontFamily="Poppins" mt="2" color="#333">
          Where every stitch tells a story and each creation is unique.
        </Text>

        <Text
          fontSize="md"
          fontFamily="Poppins"
          mt="4"
          color="#666"
          maxW="600px"
          mx="auto"
        >
          At TailorNest, we bring together skilled artisans and individuals looking for quality and personalization. Whether you're here to find a skilled tailor or showcase your craft, we are dedicated to making your journey seamless and rewarding.
        </Text>

        <Heading as="h2" fontSize="3xl" color="#3b82f6" mt="6">
          {count}+ Registered Tailors
        </Heading>
      </Box>

      {/* Information Boxes */}
      <Flex
        className="info-boxes"
        justifyContent="space-around"
        mt="8"
        wrap="wrap"
        maxW="900px"
        mx="auto"
        gap="6"
      >
        {[
          { title: 'About Us', text: 'Learn more about our mission and values, and what drives us to create.' },
          { title: 'What We Do', text: 'Discover the tailored services we offer to bring you the best experience.' },
          { title: 'Our Story', text: 'Read about our journey from humble beginnings to a thriving community.' },
        ].map((box, index) => (
          <Box
            key={index}
            className="info-box"
            p="6"
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="lg"
            bg="white"
            transition="transform 0.3s ease, background-color 0.3s ease"
            _hover={{ transform: 'translateY(-5px)', bg: '#edf2f7' }}
            maxW="300px"
            textAlign="center"
          >
            <Heading as="h3" size="md" color="#3b82f6" mb="4">
              {box.title}
            </Heading>
            <Text fontSize="sm" color="#666">
              {box.text}
            </Text>
          </Box>
        ))}
      </Flex>

      {/* CTA Button */}
      <Stack direction="row" justify="center" mt="10">
        <Button
          size="lg"
          colorScheme="blue"
          borderRadius="full"
          px="8"
          boxShadow="md"
          transition="transform 0.2s"
          _hover={{ transform: 'scale(1.05)' }}
          onClick={handleLogin}
        >
          Get Started
        </Button>
      </Stack>

      <Footer />
    </Box>
  );
};

export default LandingPage;
