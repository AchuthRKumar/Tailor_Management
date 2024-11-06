import React, { useState } from "react";
import {
  Box,
  Heading,
  HStack,
  IconButton,
  Editable,
  EditablePreview,
  EditableInput,
} from "@chakra-ui/react";
import { LuCheck, LuPencilLine, LuX } from "react-icons/lu";
import { Radio, RadioGroup } from "../Components/ui/radio"; // Adjust the import path if needed

const Profile: React.FC = () => {
  const [status, setStatus] = useState("open"); // Status state
  const [deliveryOption, setDeliveryOption] = useState("yes"); // Delivery option state

  return (
    <>
      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4} color="teal.500">
          Profile
        </Heading>
      </Box>

      {/* Status Box */}
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" mb={6}>
        <Heading as="h3" size="md" mb={2}>
          My Status
        </Heading>
        <RadioGroup value={status}>
          <HStack gap="6">
            <Radio value="open" onChange={() => setStatus("open")}>
              I am Open
            </Radio>
            <Radio value="closed" onChange={() => setStatus("closed")}>
              I am Closed
            </Radio>
          </HStack>
        </RadioGroup>
      </Box>

      {/* Delivery Service Availability Box */}
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" mb={6}>
        <Heading as="h3" size="md" mb={2}>
          Delivery Service Availability
        </Heading>
        <RadioGroup value={deliveryOption}>
          <HStack gap="6">
            <Radio value="yes" onChange={() => setDeliveryOption("yes")}>
              Yes
            </Radio>
            <Radio value="no" onChange={() => setDeliveryOption("no")}>
              No
            </Radio>
          </HStack>
        </RadioGroup>
      </Box>

      {/* Editable Fields */}
      {[
        { label: "Shop Name", defaultValue: "Enter shop's name" },
        { label: "Shop Description", defaultValue: "Describe your shop..." },
        { label: "Tailor Name", defaultValue: "Enter tailor's name" },
        { label: "Location", defaultValue: "Enter location" },
        { label: "Email", defaultValue: "Enter email" },
        { label: "Phone Number", defaultValue: "Enter phone number" },
        { label: "Clothes Type", defaultValue: "List types of clothes you stitch..." },
      ].map(({ label, defaultValue }, index) => (
        <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md" mb={6}>
          <Heading as="h3" size="md" mb={2}>
            {label}
          </Heading>
          <Editable.Root defaultValue={defaultValue}>
            <HStack>
              <EditablePreview />
              <EditableInput />
              <Editable.Control>
                <Editable.EditTrigger asChild>
                  <IconButton variant="ghost" size="xs" aria-label="Edit">
                    <LuPencilLine />
                  </IconButton>
                </Editable.EditTrigger>
                <Editable.CancelTrigger asChild>
                  <IconButton variant="outline" size="xs" aria-label="Cancel">
                    <LuX />
                  </IconButton>
                </Editable.CancelTrigger>
                <Editable.SubmitTrigger asChild>
                  <IconButton variant="outline" size="xs" aria-label="Save">
                    <LuCheck />
                  </IconButton>
                </Editable.SubmitTrigger>
              </Editable.Control>
            </HStack>
          </Editable.Root>
        </Box>
      ))}
    </>
  );
};

export default Profile;
