import React, { useState } from 'react';
import { Box, Button, Stack, Text, Image, Input, Card } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

const dressItems = [
    {
        title: "Shirts",
        description: "Classic and versatile, this shirt dress combines timeless elegance with modern comfort, perfect for any occasion.",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    },
    {
        title: "Pants",
        description: "Stylishly tailored for a perfect fit, these pants offer a blend of comfort and sophistication, ideal for both casual and formal looks.",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    },
    {
        title: "Kurta",
        description: "Stylishly crafted with fine details, this kurta is perfect for casual outings or festive celebrations.",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    },
    {
        title: "Palazzo Pants",
        description: "These palazzo pants combine comfort and style, perfect for a chic, relaxed look.",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    },
    {
        title: "Sherwani",
        description: "Opulently designed, this sherwani is the perfect choice for grooms seeking a regal appearance on their big day.",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    },
    {
        title: "Suits",
        description: "Tailored to perfection, this classic men's suit combines sophistication and comfort, ideal for business meetings or formal events.",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    },
    {
        title: "Blazers",
        description: "This timeless classic blazer features a tailored fit and versatile design, perfect for elevating both casual and formal outfits.",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    },
    {
        title: "Salwar Kameez",
        description: "This salwar kameez offers comfort and style, making it ideal for daily wear or family gatherings.",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    },
    {
        title: "Skirts",
        description: "Flattering and versatile, this A-line skirt gracefully cinches at the waist and flows beautifully, perfect for both casual and formal occasions.",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    },
    {
        title: "Lehenga",
        description: "Elegant and richly embellished, this lehenga is designed to make a statement at weddings and special events.",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    },
    {
        title: "Anarkali Suits",
        description: "Flowing and graceful, this Anarkali suit adds a touch of glamour to any festive occasion.",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    },
    {
        title: "Churidar Tops",
        description: "Elegantly designed, this churidar top features intricate patterns and a flattering silhouette, perfect for pairing with churidar pants for a classic and sophisticated look.",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    },
    {
        title: "Others",
        description: "Did not find what you are looking for?...Click here to",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    }
];

const DressList: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate(); // Initialize useNavigate

    const filteredDresses = dressItems.filter(dress =>
        dress.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleOrderNow = (dress) => {
        navigate(`/shops/${dress}`); 
    };

    return (
        <Box bg="white" p={6} rounded="lg" shadow="md" textAlign="center">
            <Text fontSize="2xl" fontWeight="bold" mb={4} color="teal.600">
                What would you like to have stitched?
            </Text>
            <Input
                placeholder="Search for dresses..."
                mb={4}
                value={searchTerm}
                borderRadius="full"
                width="500px"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Stack gap={4} direction="row" justify="center" wrap="wrap">
                {filteredDresses.map((dress, index) => (
                    <Card.Root key={index} maxW="sm" overflow="hidden">
                        <Image
                            src={dress.image}
                            alt={dress.title}
                        />
                        <Card.Body gap="2">
                            <Card.Title>{dress.title}</Card.Title>
                            <Card.Description>
                                {dress.description}
                            </Card.Description>
                        </Card.Body>
                        <Card.Footer gap="2">
                            <Button variant="solid" onClick={() => handleOrderNow(dress.title)}>
                                Order now
                            </Button>
                        </Card.Footer>
                    </Card.Root>
                ))}
            </Stack>
        </Box>
    );
};

export default DressList;