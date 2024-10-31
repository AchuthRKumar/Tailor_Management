// src/Pages/RegistrationPageTailor.tsx
import React, { useState } from 'react';
import { Input, Button, Box, Stack, Text } from '@chakra-ui/react';
import { Field } from '../Components/ui/field';
import { PasswordInput } from "../Components/ui/password-input";
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import axios from 'axios';

const RegistrationPageTailor: React.FC = () => {
  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [shopName, setShopName] = useState(''); // New field for shop name
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/'); // Navigate back to home or login
  };

  const handleRegister = async () => {
    // Basic validation
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const tailorData = {
      name,
      shopName,
      email,
      phone,
      password,
    };

    try {
      const response = await axios.post('http://localhost:5010/api/tailor', tailorData);
      if (response.status === 201) {
        alert("Registration successful!");
        navigate('/'); // Redirect to home or login page after successful registration
      }
    } catch (error) {
      console.error("Error registering tailor:", error);
      alert("Registration failed. Please try again...");
    }
  };

  return (
    <div className="login-container">
      <Box className="card-root">
        <div className="card-header">
          <Text as="h2" className="card-title">Register as Tailor</Text>
          <Text className="card-description">Create your tailor account by filling out the details below.</Text>
        </div>
        <div className="card-body">
          <Stack>
            <Field label="Tailor Name">
              <Input
                className="input-field"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Field>
            <Field label="Email">
              <Input
                className="input-field"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Field>
            <Field label="Phone Number">
              <Input
                className="input-field"
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Field>
            <Field label="Shop name">
              <Input
                className="input-field"
                type="input-field"
                placeholder="Enter your Shop name"
                value={shopName}
                onChange={(e) => setShopName(e.target.value)}
              />
            </Field>
            <Field label="Password">
              <PasswordInput
                className="input-field"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Field>
            <Field label="Confirm Password">
              <PasswordInput
                className="input-field"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Field>
          </Stack>
        </div>
        <div className="card-footer">
          <Button className="button button-solid" onClick={handleRegister}>Register</Button>
          <Button className="button button-outline" onClick={handleCancel}>Cancel</Button>
        </div>
      </Box>
      <Footer />
    </div>
  );
};

export default RegistrationPageTailor;
