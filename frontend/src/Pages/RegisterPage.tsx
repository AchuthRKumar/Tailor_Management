import React from 'react';
import { Button, Card, Input, Stack } from "@chakra-ui/react"
import { Field } from "../Components/ui/field"
import { PasswordInput } from "../Components/ui/password-input"


const RegisterPage: React.FC = () => {
    return (
        <Card.Root maxW="sm">
    <Card.Header>
      <Card.Title>Sign up</Card.Title>
      <Card.Description>
        Fill in the form below to create an account
      </Card.Description>
    </Card.Header>
    <Card.Body>
      <Stack gap="4" w="full">
        <Field label="First Name">
          <Input placeholder='John' />
        </Field>
        <Field label="Last Name">
          <Input placeholder='Doe' />
        </Field>
        <Field label="Email Id ">
          <Input placeholder='johndoe@xyz.com' />
        </Field>
        <Field label="Password">
          <PasswordInput placeholder='john@123'/>
        </Field>
        <Field label="Confirm Password">
          <Input placeholder='john@123'/>
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

export default RegisterPage;