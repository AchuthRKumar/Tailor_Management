// src/Pages/RegistrationTailorOrderPage.tsx
import React, { useState } from 'react';
import { Input, Button, Box, Stack, Text } from '@chakra-ui/react';
import { Field } from '../Components/ui/field';
import { PasswordInput } from "../Components/ui/password-input";
import { Checkbox } from "../Components/ui/checkbox"; // Import custom Checkbox component
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';

const RegistrationTailorOrderPage: React.FC = () => {
  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [shopName, setShopName] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [acceptAll, setAcceptAll] = useState(false);
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/'); // Navigate back to home or login
  };

  const handleContinue = () => {
    // Reset errors
    setErrors({});

    // Validation for registration
    const newErrors: { [key: string]: string } = {};
    if (!name) newErrors.name = "Please enter your name.";
    if (!/^[a-zA-Z0-9]+$/.test(name)) newErrors.name = "Username can only contain letters and numbers.";
    if (!email) newErrors.email = "Please enter your email.";
    if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Please enter a valid email address.";
    if (!phone) newErrors.phone = "Please enter your phone number.";
    if (!/^\d{10}$/.test(phone)) newErrors.phone = "Please enter a valid phone number (10 digits).";
    if (!shopName) newErrors.shopName = "Please enter your shop name.";
    if (!password) newErrors.password = "Please create a password.";
    if (password.length < 6) newErrors.password = "Password must be at least 6 characters long.";
    if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match.";

    // If errors exist, update state and return
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Collect data to store in session
    const tailorData = {
      name,
      shopName,
      email,
      phone,
      password,
      orderOptions: selectedOptions.length ? selectedOptions : acceptAll ? 'All' : null,
    };

    // Pass data to the next page
    sessionStorage.setItem("tailorData", JSON.stringify(tailorData));
    navigate('/'); // Navigate to the next page
  };

  const handleOptionChange = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  const handleAcceptAllChange = (e: { checked: boolean }) => {
    setAcceptAll(!!e.checked);
    setSelectedOptions(e.checked ? orderOptions : []);
  };

  // Updated order options including women's items
  const orderOptions = [
    "Shirts", 
    "Pants", 
    "Kurta", 
    "Suits", 
    "Blazers",  
    "Skirts", 
    "Tops",  
    "Lehengas"
  ];

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bg="linear-gradient(to right, #a8e6cf, #dcedc1)" // Green gradient background
      padding="20px"
    >
      <Box
        maxW="500px"
        p={6}
        bg="white"
        boxShadow="md"
        borderRadius="10px"
        textAlign="center"
      >
        <Text
          as="h2"
          fontSize="24px"
          fontWeight="bold"
          mb="24px"
          fontFamily="Poppins, sans-serif"
          color="#38a169" // Green color for the title
        >
          Register as Tailor
        </Text>
        <Text
          mb="20px"
          fontFamily="Arial, sans-serif"
          fontSize="16px"
          color="gray.600"
        >
          Create your tailor account by filling out the details below.
        </Text>
        <Stack mb="20px">
          <Field label="Tailor Name">
            <Input
              className="input-field"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setUsername(e.target.value)}
              isInvalid={!!errors.name} // Indicate invalid state
            />
            {errors.name && <Text color="red.500" fontSize="sm">{errors.name}</Text>} {/* Error message */}
          </Field>
          <Field label="Email">
            <Input
              className="input-field"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isInvalid={!!errors.email} // Indicate invalid state
            />
            {errors.email && <Text color="red.500" fontSize="sm">{errors.email}</Text>} {/* Error message */}
          </Field>
          <Field label="Phone Number">
            <Input
              className="input-field"
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              isInvalid={!!errors.phone} // Indicate invalid state
            />
            {errors.phone && <Text color="red.500" fontSize="sm">{errors.phone}</Text>} {/* Error message */}
          </Field>
          <Field label="Shop Name">
            <Input
              className="input-field"
              placeholder="Enter your Shop name"
              value={shopName}
              onChange={(e) => setShopName(e.target.value)}
              isInvalid={!!errors.shopName} // Indicate invalid state
            />
            {errors.shopName && <Text color="red.500" fontSize="sm">{errors.shopName}</Text>} {/* Error message */}
          </Field>
          <Field label="Password">
            <PasswordInput
              className="input-field"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              isInvalid={!!errors.password} // Indicate invalid state
            />
            {errors.password && <Text color="red.500" fontSize="sm">{errors.password}</Text>} {/* Error message */}
          </Field>
          <Field label="Confirm Password">
            <PasswordInput
              className="input-field"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              isInvalid={!!errors.confirmPassword} // Indicate invalid state
            />
            {errors.confirmPassword && <Text color="red.500" fontSize="sm">{errors.confirmPassword}</Text>} {/* Error message */}
          </Field>
        </Stack>

        <Text
          as="h3"
          fontSize="20px"
          fontWeight="bold"
          mb="16px"
          fontFamily="Poppins, sans-serif"
          color="#38a169" // Green color for the title
        >
          What orders do you take?
        </Text>
        <Stack mb="20px">
          {orderOptions.map((option) => (
            <Checkbox
              key={option}
              checked={selectedOptions.includes(option)}
              onCheckedChange={() => handleOptionChange(option)}
              fontSize="lg"
              fontFamily="Arial, sans-serif"
              colorScheme="green" // Green color for checkboxes
            >
              {option}
            </Checkbox>
          ))}
        </Stack>
        <Checkbox
          checked={acceptAll}
          onCheckedChange={handleAcceptAllChange}
          fontSize="md"
          fontFamily="Arial, sans-serif"
          colorScheme="green" // Green color for "I accept all orders" checkbox
          mb="16px"
        >
          I accept all orders
        </Checkbox>
        <Box display="flex" justifyContent="space-between" mt={4}>
          <Button
            bg="#38a169" // Green button background
            color="white"
            _hover={{ bg: "#2f855a" }} // Darker green on hover
            onClick={handleContinue}
          >
            Register
          </Button>
          <Button
            bg="gray.300" // Gray background for cancel button
            color="black"
            _hover={{ bg: "gray.400" }} // Darker gray on hover
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </Box>
      </Box>
      <Footer /> {/* Footer included at the bottom */}
    </Box>
  );
};

export default RegistrationTailorOrderPage;
