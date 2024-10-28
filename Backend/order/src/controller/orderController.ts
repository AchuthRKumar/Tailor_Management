// orderController.ts
import { Request, Response } from 'express';
import { OrderService } from '../service/orderService';
import { Order } from '../model/order';

export const OrderController = {
    getOrdersByTailor: async (req: Request, res: Response) => {
        const tailorId = req.params.tailorId;
        const orders = await OrderService.getOrdersByTailor(tailorId);
        res.json(orders);
    },
    getOrdersByCustomer: async (req: Request, res: Response) => {
        const customerId = req.params.customerId;
        const orders = await OrderService.getOrdersByCustomer(customerId);
        res.json(orders);
    },
    postOrder: async (req: Request, res: Response) => {
        const orderData: Partial<Order> = { ...req.body };
        const newOrder = await OrderService.postOrder(orderData);
        res.status(201).json(newOrder);
    },
    updateOrderByTailor: async (req: Request, res: Response) => {
        const orderId = req.params.orderId;
        const { status } = req.body;
        const updatedOrder = await OrderService.updateOrderByTailor(orderId, status);
        if (updatedOrder) {
            res.json(updatedOrder);
        } else {
            res.status(404).send('Order not found');
        }
    },
    updateOrderByCustomer: async (req: Request, res: Response) => {
        const orderId = req.params.orderId;
        const updates = req.body;
        const updatedOrder = await OrderService.updateOrderByCustomer(orderId, updates);
        if (updatedOrder) {
            res.json(updatedOrder);
        } else {
            res.status(404).send('Order not found');
        }
    },
};
