// orderService.ts
import OrderModel, { Order } from '../model/order';

export const OrderService = {
    getOrdersByTailor: async (tailorId: string): Promise<Order[]> => {
        return OrderModel.find({ tailorId });
    },
    getOrdersByCustomer: async (customerId: string): Promise<Order[]> => {
        return OrderModel.find({ customerId });
    },
    postOrder: async (orderData: Partial<Order>): Promise<Order> => {
        const order = new OrderModel(orderData);
        return order.save();
    },
    updateOrderByTailor: async (orderId: string, status: string): Promise<Order | null> => {
        return OrderModel.findByIdAndUpdate(orderId, { orderStatus: status }, { new: true });
    },
    updateOrderByCustomer: async (orderId: string, updates: Partial<Order>): Promise<Order | null> => {
        return OrderModel.findByIdAndUpdate(orderId, updates, { new: true });
    },
};
