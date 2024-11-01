import React from 'react';
import { Box, Button, Stack, Text, Card, Image } from "@chakra-ui/react";


const DressList: React.FC = () => {
    return(

        <Box bg="white" p={6} rounded="lg" shadow="md" textAlign="center" >
        <Text fontSize="2xl" fontWeight="bold" mb={4} color="teal.600">
        What would you like to have stitched?.....
        </Text>
        <Stack gap = {4} direction="row" justify="center" wrap="wrap">
            <Card.Root maxW="sm" overflow="hidden">
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
            />
            <Card.Body gap="2">
              <Card.Title>Shirts</Card.Title>
              <Card.Description>
              Classic and versatile, this shirt dress combines timeless elegance with modern comfort, perfect for any occasion.
              </Card.Description>
            </Card.Body>
            <Card.Footer gap="2">
              <Button variant="solid">Order now</Button>
            </Card.Footer>
          </Card.Root>


          <Card.Root maxW="sm" overflow="hidden">
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
            />
            <Card.Body gap="2">
              <Card.Title>Pants</Card.Title>
              <Card.Description>
              Stylishly tailored for a perfect fit, these pants offer a blend of comfort and sophistication, ideal for both casual and formal looks.              
              </Card.Description>
            </Card.Body>
            <Card.Footer gap="2">
              <Button variant="solid">Order now</Button>
            </Card.Footer>
          </Card.Root>


          <Card.Root maxW="sm" overflow="hidden">
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
            />
            <Card.Body gap="2">
              <Card.Title>Kurta</Card.Title>
              <Card.Description>
              Stylishly crafted with fine details, this kurta is perfect for casual outings or festive celebrations.
               </Card.Description>
            </Card.Body>
            <Card.Footer gap="2">
              <Button variant="solid">Order now</Button>
            </Card.Footer>
          </Card.Root>


          <Card.Root maxW="sm" overflow="hidden">
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
            />
            <Card.Body gap="2">
              <Card.Title>Palazzo Pants</Card.Title>
              <Card.Description>
              These palazzo pants combine comfort and style, perfect for a chic, relaxed look.
               </Card.Description>
            </Card.Body>
            <Card.Footer gap="2">
              <Button variant="solid">Order now</Button>
            </Card.Footer>
          </Card.Root>


          <Card.Root maxW="sm" overflow="hidden">
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
            />
            <Card.Body gap="2">
              <Card.Title>Sherwani</Card.Title>
              <Card.Description>
              Opulently designed, this sherwani is the perfect choice for grooms seeking a regal appearance on their big day.
               </Card.Description>
            </Card.Body>
            <Card.Footer gap="2">
              <Button variant="solid">Order now</Button>
            </Card.Footer>
          </Card.Root>

          <Card.Root maxW="sm" overflow="hidden">
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
            />
            <Card.Body gap="2">
              <Card.Title>Salwaar Kammez</Card.Title>
              <Card.Description>
              This salwar kameez offers comfort and style, making it ideal for daily wear or family gatherings
               </Card.Description>
            </Card.Body>
            <Card.Footer gap="2">
              <Button variant="solid">Order now</Button>
            </Card.Footer>
          </Card.Root>
          
          <Card.Root maxW="sm" overflow="hidden">
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
            />
            <Card.Body gap="2">
              <Card.Title>Lehenga</Card.Title>
              <Card.Description>
              Elegant and richly embellished, this lehenga is designed to make a statement at weddings and special events.
               </Card.Description>
            </Card.Body>
            <Card.Footer gap="2">
              <Button variant="solid">Order now</Button>
            </Card.Footer>
          </Card.Root>
          

          <Card.Root maxW="sm" overflow="hidden">
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
            />
            <Card.Body gap="2">
              <Card.Title>Anarkali Suits</Card.Title>
              <Card.Description>
              Flowing and graceful, this Anarkali suit adds a touch of glamour to any festive occasion.
               </Card.Description>
            </Card.Body>
            <Card.Footer gap="2">
              <Button variant="solid">Order now</Button>
            </Card.Footer>
          </Card.Root>

          <Card.Root maxW="sm" overflow="hidden">
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
            />
            <Card.Body gap="2">
              <Card.Title>Others</Card.Title>
              <Card.Description>
              Cannot find what you are looking for?..Click on check now to search for dresses you like to have stitched.
               </Card.Description>
            </Card.Body>
            <Card.Footer gap="2">
              <Button variant="solid">Check now</Button>
            </Card.Footer>
          </Card.Root>

          </Stack>
          </Box>
    );
};

export default DressList;