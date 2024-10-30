import { Request, Response } from 'express';
import OrderModel, { Order } from '../model/order';

export const OrderController = {
    getOrdersByTailor: async (req: Request, res: Response) => {
        const tailorId = req.params.tailorId;
        try {
            const orders = await OrderModel.find({ tailorId });
            res.json(orders);
        } catch (error) {
            res.status(500).send('Server Error');
        }
    },

    getOrdersByCustomer: async (req: Request, res: Response) => {
        const customerId = req.params.customerId;
        try {
            const orders = await OrderModel.find({ customerId });
            res.json(orders);
        } catch (error) {
            res.status(500).send('Server Error');
        }
    },

    postOrder: async (req: Request, res: Response) => {
        const orderData: Partial<Order> = { ...req.body };
        try {
            const order = new OrderModel(orderData);
            const newOrder = await order.save();
            res.status(201).json(newOrder);
        } catch (error) {
            res.status(400).send('Bad Request');
        }
    },

    updateOrderByTailor: async (req: Request, res: Response) => {
        const orderId = req.params.orderId;
        const { status } = req.body;
        try {
            const updatedOrder = await OrderModel.findByIdAndUpdate(orderId, { orderStatus: status }, { new: true });
            if (updatedOrder) {
                res.json(updatedOrder);
            } else {
                res.status(404).send('Order not found');
            }
        } catch (error) {
            res.status(500).send('Server Error');
        }
    },

    updateOrderByCustomer: async (req: Request, res: Response) => {
        const orderId = req.params.orderId;
        const updates = req.body;
        try {
            const updatedOrder = await OrderModel.findByIdAndUpdate(orderId, updates, { new: true });
            if (updatedOrder) {
                res.json(updatedOrder);
            } else {
                res.status(404).send('Order not found');
            }
        } catch (error) {
            res.status(500).send('Server Error');
        }
    },
};
