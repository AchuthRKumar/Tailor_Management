// src/LoginPage.tsx
import React from 'react';
import { Card, Button, Input, Stack } from '@chakra-ui/react';
import {Field} from '../Components/ui/field';
import { PasswordInput } from "../Components/ui/password-input";

const LoginPage: React.FC = () => {
  return (
    <Card.Root maxW="sm">
    <Card.Header>
      <Card.Title>Sign In</Card.Title>
      <Card.Description>
        Enter your credentials in the form below
      </Card.Description>
    </Card.Header>
    <Card.Body>
      <Stack gap="4" w="full">
        <Field label="Username">
          <Input placeholder='username'/>
        </Field>
        <Field label="Password">
          <PasswordInput placeholder='johndoe@xyz.com'/>
        </Field>
      </Stack>
    </Card.Body>
    <Card.Footer justifyContent="flex-end">
      <Button variant="outline">Cancel</Button>
      <Button variant="solid">Sign in</Button>
    </Card.Footer>
  </Card.Root>
  );
};

export default LoginPage;
