import { Box, Button, HStack, Container, Stack, Input, Text, VStack } from "@chakra-ui/react";

const CustomerHomePage = () => {
  return (
    <Box bg="gray.100" minH="100vh">
      {/* Stylish Top Bar */}
      <Box bg="teal.500" py={4}>
        <Container maxW="container.xl">
          <HStack justify="space-between" color="white">
            <Text fontWeight="bold" fontSize="2xl">
              Tailor Logo
            </Text>
            <Text fontWeight="medium" fontSize="md">
              Account
            </Text>
          </HStack>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="container.md" py={8}>
        <VStack spacing={8} align="stretch">
          
          {/* Enhanced Search Bar */}
          <Input
            placeholder="Find tailors near me"
            size="lg"
            variant="filled"
            focusBorderColor="teal.500"
            bg="white"
            borderRadius="full"
            shadow="sm"
            _hover={{ bg: "gray.50" }}
          />

          {/* Customer Dashboard */}
          <Box bg="white" p={6} rounded="lg" shadow="md">
            <Text fontSize="2xl" fontWeight="bold" mb={4} textAlign="center" color="teal.600">
              Customer Dashboard
            </Text>
            <Stack direction="row" spacing={4}>
              <Box flex="1" p={4} bg="gray.50" rounded="md" shadow="sm" textAlign="center">
                <Text fontWeight="bold">Past Orders</Text>
                <Text fontSize="sm" mt={2}>Shirt - Completed</Text>
                <Text fontSize="sm">Pant - Completed</Text>
              </Box>
              <Box flex="1" p={4} bg="gray.50" rounded="md" shadow="sm" textAlign="center">
                <Text fontWeight="bold">Ongoing Orders</Text>
                <Text fontSize="sm" mt={2}>Saree - In Progress</Text>
                <Text fontSize="sm">Blazer - In Progress</Text>
              </Box>
              <Box flex="1" p={4} bg="gray.50" rounded="md" shadow="sm" textAlign="center">
                <Text fontWeight="bold">Notifications</Text>
                <Text fontSize="sm" mt={2}>Order #123 ready for pickup</Text>
                <Text fontSize="sm">Tailor A accepted your order</Text>
              </Box>
            </Stack>
          </Box>

          {/* Measurements Form */}
          <Box bg="white" p={6} rounded="lg" shadow="md">
            <Text fontSize="2xl" fontWeight="bold" mb={4} textAlign="center" color="teal.600">
              Measurements
            </Text>
            <Stack spacing={4}>
              <Input placeholder="Height" borderColor="teal.500" />
              <Input placeholder="Waist" borderColor="teal.500" />
              <Input placeholder="Chest" borderColor="teal.500" />
              <Input placeholder="Sleeve" borderColor="teal.500" />
              <Button colorScheme="teal" size="md" borderRadius="full">
                Save Measurements
              </Button>
            </Stack>
          </Box>

          {/* Popular Orders Section */}
          <Box bg="white" p={6} rounded="lg" shadow="md" textAlign="center">
            <Text fontSize="2xl" fontWeight="bold" mb={4} color="teal.600">
              Popular Orders
            </Text>
            <Stack direction="row" spacing={4} justify="center">
              <Box flex="1" p={4} bg="gray.50" rounded="md" shadow="sm" textAlign="center">
                <Text fontWeight="bold">Shirts</Text>
              </Box>
              <Box flex="1" p={4} bg="gray.50" rounded="md" shadow="sm" textAlign="center">
                <Text fontWeight="bold">Pants</Text>
              </Box>
              <Box flex="1" p={4} bg="gray.50" rounded="md" shadow="sm" textAlign="center">
                <Text fontWeight="bold">Sarees</Text>
              </Box>
            </Stack>
          </Box>

        </VStack>
      </Container>
    </Box>
  );
};

export default CustomerHomePage;
