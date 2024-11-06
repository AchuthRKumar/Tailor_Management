import React, { useEffect, useState } from "react";
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
import { Radio, RadioGroup } from "../Components/ui/radio";
import { useUserContext } from '../UserContext'; 
import axios from "axios";


interface Dress {
  name: string;
  price: number;
}

 interface TailorData{
  name: string;
  shopName: string;
  location: string; 
  email: string;
  phone: string;
  revenue: number;
  ordersCount: number;
  completed: number;
  password: string;
  status: string;
  isDelivery: string;
  dress: Dress[]; 
  firebaseUid: string;
  role: string;

}

const Profile: React.FC = () => {
  const [Tailor, setTailor] = useState<TailorData>()
  const { user, logout } = useUserContext();


  useEffect(() => {
    // Fetch the tailor's profile data when the component mounts
    const fetchTailorData = async () => {
      try {
        const response = await axios.get(`http://localhost:5010/api/tailor/uid/${user?.firebaseUid}`); 
        const data = response.data[0];
        console.log(data);
        setTailor({
          name: data.name || "",
          shopName: data.shopName || "",
          location: data.location || "",
          email: data.email || "",
          phone: data.phone || "",
          revenue: data.revenue ||  0,
          ordersCount: data.ordersCount || 0,
          completed: data.completed || 0,
          password: data.password || "",
          status: data.status || "",
          isDelivery: data.isDelivery || "",
          dress: data.dress, 
          firebaseUid: data.firebaseUid || "",
          role: data.role || ""
        });
        console.log(Tailor?.name);
      } catch (error) {
        console.error("Error fetching tailor data:", error);
      }
    };

    fetchTailorData();
  }, []);    

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
        <RadioGroup value={"open"}>
          <HStack gap="6">
            <Radio value="open" >
              I am Open
            </Radio>
            <Radio value="closed" >
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
        <RadioGroup >
          <HStack gap="6">
            <Radio value="yes" >
              Yes
            </Radio>
            <Radio value="no">
              No
            </Radio>
          </HStack>
        </RadioGroup>
      </Box>

      {/* Editable Fields */}
      {[
        { label: "Shop Name", defaultValue: Tailor?.shopName },
        { label: "Name", defaultValue: Tailor?.name },
        { label: "Location", defaultValue: Tailor?.location },
        { label: "Email", defaultValue: Tailor?.email },
        { label: "Phone Number", defaultValue: Tailor?.phone },
        { label: "Password", defaultValue: Tailor?.password },
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
