import React, { useEffect, useState } from 'react';
import { Table, Center, Heading, Box, Button } from '@chakra-ui/react';
import { SegmentedControl } from "../Components/ui/segmented-control";
import { Card } from "@chakra-ui/react";
import axios from 'axios';
import {
    DrawerActionTrigger,
    DrawerBackdrop,
    DrawerBody,
    DrawerCloseTrigger,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerRoot,
    DrawerTrigger,
} from "../Components/ui/drawer";

interface Order {
    _id: string;
    customerId: string;
    tailorId: string;
    deliveryDate: string;
    orderStatus: string;
    amount: number;
    dresses: string[];
    placedDate: string;
}

const OrdersTailor: React.FC = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [updatedOrders, setUpdatedOrders] = useState<Order[]>([]);
    const [hasChanges, setHasChanges] = useState<boolean>(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('http://localhost:5010/api/order/tailor/6727b96e7f2024067e9090b6');
                setOrders(response.data);
                setUpdatedOrders(response.data);
            } catch (error) {
                console.error("Error fetching orders:", error);
            }
        };

        fetchOrders();
    }, []);

    const handleStatusChange = (orderId: string, status: string) => {
        setUpdatedOrders(prevOrders =>
            prevOrders.map(order => {
                if (order._id === orderId) {
                    setHasChanges(true);
                    return { ...order, orderStatus: status };
                }
                return order;
            })
        );
    };

    const saveChanges = async () => {
        try {
            const updatePromises = updatedOrders.map(order =>
                axios.put(`http://localhost:5010/api/order/tailor/${order._id}`, order)
            );
            await Promise.all(updatePromises);
            const response = await axios.get('http://localhost:5010/api/order/tailor/tailor1');
            setOrders(response.data);
            setHasChanges(false);
        } catch (error) {
            console.error("Error saving order status:", error);
        }
    };

    const cancelChanges = () => {
        setUpdatedOrders(orders);
        setHasChanges(false);
    };

    const handleViewDetails = (order: Order) => {
        setSelectedOrder(order);
        setIsDrawerOpen(true);
    };

    return (
        <Center>
            <Card.Root width="1000px">
                <Center>
                    <Heading size="lg">Orders to Complete</Heading>
                </Center>
                <Box p={4}>
                    <Table.Root variant="outline" width="100%">
                        <Table.Header>
                            <Table.Row>
                                <Table.ColumnHeader>Customer</Table.ColumnHeader>
                                <Table.ColumnHeader>Deadline</Table.ColumnHeader>
                                <Table.ColumnHeader>Dresses</Table.ColumnHeader>
                                <Table.ColumnHeader>Details</Table.ColumnHeader>
                                <Table.ColumnHeader>Order Status</Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {updatedOrders.map((order) => (
                                <Table.Row key={order._id}>
                                    <Table.Cell>{order.customerId}</Table.Cell>
                                    <Table.Cell>{new Date(order.deliveryDate).toLocaleDateString()}</Table.Cell>
                                    <Table.Cell>
                                        <ul>
                                            {order.dresses.map((dress, index) => (
                                                <li key={index}>{dress}</li>
                                            ))}
                                        </ul>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <DrawerRoot placement="end" size="lg">
                                            <DrawerTrigger asChild>
                                                <Button size="sm" onClick={() => handleViewDetails(order)}>View Details</Button>
                                            </DrawerTrigger>
                                            <DrawerBackdrop />
                                            <DrawerContent offset="3" rounded="md">
                                                <DrawerCloseTrigger>
                                                    <Button variant="outline">Close</Button>
                                                </DrawerCloseTrigger>
                                                <DrawerHeader>
                                                    <DrawerTitle>Order Details</DrawerTitle>
                                                </DrawerHeader>
                                                <DrawerBody>
                                                    {selectedOrder && (
                                                        <Box>
                                                            <p><strong>Customer ID:</strong> {selectedOrder.customerId}</p>
                                                            <p><strong>Placed On:</strong> {selectedOrder.placedDate}</p>
                                                            <p><strong>Delivery Date:</strong> {new Date(selectedOrder.deliveryDate).toLocaleDateString()}</p>
                                                            <p><strong>Order Status:</strong> {selectedOrder.orderStatus}</p>
                                                            <p><strong>Amount:</strong> ${selectedOrder.amount.toFixed(2)}</p>
                                                            <p><strong>Dresses:</strong></p>
                                                            <ul>
                                                                {selectedOrder.dresses.map((dress, index) => (
                                                                    <li key={index}>{dress}</li>
                                                                ))}
                                                            </ul>
                                                            <p><strong>Placed Date:</strong> {new Date(selectedOrder.placedDate).toLocaleDateString()}</p>
                                                        </Box>
                                                    )}
                                                </DrawerBody>
                                            </DrawerContent>
                                        </DrawerRoot>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <SegmentedControl
                                            value={order.orderStatus}
                                            items={[
                                                { label: "Pending", value: "Pending" },
                                                { label: "Accepted", value: "Accepted" },
                                                { label: "Completed", value: "Completed" },
                                                { label: "Cancel", value: "Cancel" }
                                            ]}
                                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleStatusChange(order._id, event.target.value)} 
                                        />
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table.Root>
                    {hasChanges && (
                        <Box mt={4} display="flex" justifyContent="space-between">
                            <Button colorScheme="red" onClick={cancelChanges}>Cancel</Button>
                            <Button colorScheme="blue" onClick={saveChanges}>Save Changes</Button>
                        </Box>
                    )}
                </Box>
            </Card.Root>
        </Center>
    );
};

export default OrdersTailor;
