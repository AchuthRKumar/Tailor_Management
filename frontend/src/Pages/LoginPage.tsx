// src/LoginPage.tsx
import React from 'react';
import { Input, Button, Box, Stack, Text } from '@chakra-ui/react';
import { Field } from '../Components/ui/field';
import { PasswordInput } from "../Components/ui/password-input";
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';


const LoginPage: React.FC = () => {

  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/');
  };

  const handleSignIn = () => {
    navigate('/thome');
  }

  const handleReportNavigation = () => {
    navigate('/treports');
  };

  return (
    <div className="login-container">
      <Box className="card-root">
        <div className="card-header">
          <Text as="h2" className="card-title">Sign In</Text>
          <Text className="card-description">Please enter your credentials below.</Text>
        </div>
        <div className="card-body">
          <Stack>
            <Field label="Username">
              <Input className="input-field" placeholder="Enter your username" />
            </Field>
            <Field label="Password">
              <PasswordInput placeholder="Enter your password" />
            </Field>
          </Stack>
        </div>
        <div className="card-footer">
          <Button className="button button-solid" onClick={handleSignIn}>Sign In</Button>
          <Button className="button button-outline" onClick={handleCancel}>Cancel</Button>
        </div>
      </Box>
      <Footer />
    </div>
  );
};

export default LoginPage;
