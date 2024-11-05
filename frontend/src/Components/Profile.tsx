<<<<<<< HEAD
import React, { useState, useEffect, useContext } from 'react';
import { Box, Heading, Textarea, Input, HStack, IconButton, Spinner, Alert } from '@chakra-ui/react';
import { Radio, RadioGroup } from "../Components/ui/radio"; // Adjust the import path if needed
import { LuCheck } from "react-icons/lu"; // Icons for save action
import { FaEdit, FaTrash } from "react-icons/fa"; // Import FaEdit and FaTrash icons
import axios from 'axios';
import { useUserContext } from '../UserContext';

const Profile: React.FC = () => {
  const { user, logout } = useUserContext();
  const [status, setStatus] = useState('open'); // Status state
  const [deliveryOption, setDeliveryOption] = useState('yes'); // Delivery option state

  // States for editable fields
  const [isEditingShopName, setIsEditingShopName] = useState(false);
  const [shopName, setShopName] = useState('');
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [shopDescription, setShopDescription] = useState('');
  const [isEditingTailorName, setIsEditingTailorName] = useState(false);
  const [tailorName, setTailorName] = useState('');
  const [isEditingLocation, setIsEditingLocation] = useState(false);
  const [location, setLocation] = useState('');
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [email, setEmail] = useState('');
  const [isEditingPhoneNumber, setIsEditingPhoneNumber] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isEditingClothesType, setIsEditingClothesType] = useState(false);
  const [clothesType, setClothesType] = useState('');

  // Loading and error states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTailorData = async () => {
      try {
        const response = await axios.get(`http://localhost:5010/api/tailor/uid/${user?.firebaseUid}`);
        const tailorData = response.data; // Assuming this is the structure of your data
        // Set state with fetched data
        setShopName(tailorData.shopName);
        setShopDescription(tailorData.shopDescription);
        setTailorName(tailorData.tailorName);
        setLocation(tailorData.location);
        setEmail(tailorData.email);
        setPhoneNumber(tailorData.phoneNumber);
        setClothesType(tailorData.clothesType);
        setStatus(tailorData.status || 'open'); // Default to 'open' if status is not available
        setDeliveryOption(tailorData.deliveryOption || 'yes'); // Default to 'yes' if not set
      } catch (err) {
        setError('Failed to load tailor data');
      } finally {
        setLoading(false);
      }
    };

    fetchTailorData();
  }, [user]);

  const handleSave = (field: string) => {
    switch (field) {
      case 'shopName':
        setIsEditingShopName(false);
        break;
      case 'description':
        setIsEditingDescription(false);
        break;
      case 'tailorName':
        setIsEditingTailorName(false);
        break;
      case 'location':
        setIsEditingLocation(false);
        break;
      case 'email':
        setIsEditingEmail(false);
        break;
      case 'phoneNumber':
        setIsEditingPhoneNumber(false);
        break;
      case 'clothesType':
        setIsEditingClothesType(false);
        break;
      default:
        break;
    }
  };

  const handleDelete = (field: string) => {
    switch (field) {
      case 'shopName':
        setShopName('');
        setIsEditingShopName(false);
        break;
      case 'description':
        setShopDescription('');
        setIsEditingDescription(false);
        break;
      case 'tailorName':
        setTailorName('');
        setIsEditingTailorName(false);
        break;
      case 'location':
        setLocation('');
        setIsEditingLocation(false);
        break;
      case 'email':
        setEmail('');
        setIsEditingEmail(false);
        break;
      case 'phoneNumber':
        setPhoneNumber('');
        setIsEditingPhoneNumber(false);
        break;
      case 'clothesType':
        setClothesType('');
        setIsEditingClothesType(false);
        break;
      default:
        break;
    }
  };
=======
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
>>>>>>> baf22707d4ceeba0dccbf7f964913a929ea38ab8

  if (loading) {
    return <Spinner size="xl" />;
  }

  if (error) {
    return (
      <Alert status="error" mb={4}>
        {error}
      </Alert>
    );
  }

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
<<<<<<< HEAD
          </>
        ) : (
          <>
            <Box mb={2}>{shopName}</Box>
            <IconButton 
              aria-label="Edit" 
              onClick={() => setIsEditingShopName(true)}
              style={{ color: 'blue' }} // Styling for edit icon
            >
              <FaEdit style={{ fontSize: '1.5rem' }} />
            </IconButton>
          </>
        )}
      </Box>

      {/* Shop Description */}
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" mb={6}>
        <Heading as="h3" size="md" mb={2}>
          Shop Description
        </Heading>
        {isEditingDescription ? (
          <>
            <Textarea 
              value={shopDescription}
              onChange={(e) => setShopDescription(e.target.value)} 
              size="lg" 
            />
            <HStack mt={2}>
              <IconButton 
                aria-label="Save" 
                onClick={() => handleSave('description')}
                color="teal.500"
                _hover={{ bg: "gray.200" }}
              >
                <LuCheck />
              </IconButton>
              <IconButton 
                aria-label="Delete" 
                onClick={() => handleDelete('description')}
                style={{ color: 'red' }} // Styling for delete icon
              >
                <FaTrash style={{ fontSize: '1.5rem' }} />
              </IconButton>
            </HStack>
          </>
        ) : (
          <>
            <Box mb={2}>{shopDescription}</Box>
            <IconButton 
              aria-label="Edit" 
              onClick={() => setIsEditingDescription(true)}
              style={{ color: 'blue' }} // Styling for edit icon
            >
              <FaEdit style={{ fontSize: '1.5rem' }} />
            </IconButton>
          </>
        )}
      </Box>

      {/* Tailor Name */}
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" mb={6}>
        <Heading as="h3" size="md" mb={2}>
          Tailor Name
        </Heading>
        {isEditingTailorName ? (
          <>
            <Input 
              value={tailorName} 
              onChange={(e) => setTailorName(e.target.value)} 
              size="lg" 
            />
            <HStack mt={2}>
              <IconButton 
                aria-label="Save" 
                onClick={() => handleSave('tailorName')}
              >
                <LuCheck />
              </IconButton>
              <IconButton 
                aria-label="Delete" 
                onClick={() => handleDelete('tailorName')}
                style={{ color: 'red' }} // Styling for delete icon
              >
                <FaTrash style={{ fontSize: '1.5rem' }} />
              </IconButton>
            </HStack>
          </>
        ) : (
          <>
            <Box mb={2}>{tailorName}</Box>
            <IconButton 
              aria-label="Edit" 
              onClick={() => setIsEditingTailorName(true)}
              style={{ color: 'blue' }} // Styling for edit icon
            >
              <FaEdit style={{ fontSize: '1.5rem' }} />
            </IconButton>
          </>
        )}
      </Box>

      {/* Location */}
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" mb={6}>
        <Heading as="h3" size="md" mb={2}>
          Location
        </Heading>
        {isEditingLocation ? (
          <>
            <Input 
              value={location} 
              onChange={(e) => setLocation(e.target.value)} 
              size="lg" 
            />
            <HStack mt={2}>
              <IconButton 
                aria-label="Save" 
                onClick={() => handleSave('location')}
              >
                <LuCheck />
              </IconButton>
              <IconButton 
                aria-label="Delete" 
                onClick={() => handleDelete('location')}
                style={{ color: 'red' }} // Styling for delete icon
              >
                <FaTrash style={{ fontSize: '1.5rem' }} />
              </IconButton>
            </HStack>
          </>
        ) : (
          <>
            <Box mb={2}>{location}</Box>
            <IconButton 
              aria-label="Edit" 
              onClick={() => setIsEditingLocation(true)}
              style={{ color: 'blue' }} // Styling for edit icon
            >
              <FaEdit style={{ fontSize: '1.5rem' }} />
            </IconButton>
          </>
        )}
      </Box>

      {/* Email */}
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" mb={6}>
        <Heading as="h3" size="md" mb={2}>
          Email
        </Heading>
        {isEditingEmail ? (
          <>
            <Input 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              size="lg" 
            />
            <HStack mt={2}>
              <IconButton 
                aria-label="Save" 
                onClick={() => handleSave('email')}
              >
                <LuCheck />
              </IconButton>
              <IconButton 
                aria-label="Delete" 
                onClick={() => handleDelete('email')}
                style={{ color: 'red' }} // Styling for delete icon
              >
                <FaTrash style={{ fontSize: '1.5rem' }} />
              </IconButton>
            </HStack>
          </>
        ) : (
          <>
            <Box mb={2}>{email}</Box>
            <IconButton 
              aria-label="Edit" 
              onClick={() => setIsEditingEmail(true)}
              style={{ color: 'blue' }} // Styling for edit icon
            >
              <FaEdit style={{ fontSize: '1.5rem' }} />
            </IconButton>
          </>
        )}
      </Box>

      {/* Phone Number */}
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" mb={6}>
        <Heading as="h3" size="md" mb={2}>
          Phone Number
        </Heading>
        {isEditingPhoneNumber ? (
          <>
            <Input 
              value={phoneNumber} 
              onChange={(e) => setPhoneNumber(e.target.value)} 
              size="lg" 
            />
            <HStack mt={2}>
              <IconButton 
                aria-label="Save" 
                onClick={() => handleSave('phoneNumber')}
              >
                <LuCheck />
              </IconButton>
              <IconButton 
                aria-label="Delete" 
                onClick={() => handleDelete('phoneNumber')}
                style={{ color: 'red' }} // Styling for delete icon
              >
                <FaTrash style={{ fontSize: '1.5rem' }} />
              </IconButton>
            </HStack>
          </>
        ) : (
          <>
            <Box mb={2}>{phoneNumber}</Box>
            <IconButton 
              aria-label="Edit" 
              onClick={() => setIsEditingPhoneNumber(true)}
              style={{ color: 'blue' }} // Styling for edit icon
            >
              <FaEdit style={{ fontSize: '1.5rem' }} />
            </IconButton>
          </>
        )}
      </Box>

      {/* Clothes Type */}
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" mb={6}>
        <Heading as="h3" size="md" mb={2}>
          Clothes Type
        </Heading>
        {isEditingClothesType ? (
          <>
            <Input 
              value={clothesType} 
              onChange={(e) => setClothesType(e.target.value)} 
              size="lg" 
            />
            <HStack mt={2}>
              <IconButton 
                aria-label="Save" 
                onClick={() => handleSave('clothesType')}
              >
                <LuCheck />
              </IconButton>
              <IconButton 
                aria-label="Delete" 
                onClick={() => handleDelete('clothesType')}
                style={{ color: 'red' }} // Styling for delete icon
              >
                <FaTrash style={{ fontSize: '1.5rem' }} />
              </IconButton>
            </HStack>
          </>
        ) : (
          <>
            <Box mb={2}>{clothesType}</Box>
            <IconButton 
              aria-label="Edit" 
              onClick={() => setIsEditingClothesType(true)}
              style={{ color: 'blue' }} // Styling for edit icon
            >
              <FaEdit style={{ fontSize: '1.5rem' }} />
            </IconButton>
          </>
        )}
      </Box>
=======
          </Editable.Root>
        </Box>
      ))}
>>>>>>> baf22707d4ceeba0dccbf7f964913a929ea38ab8
    </>
  );
};

export default Profile;
