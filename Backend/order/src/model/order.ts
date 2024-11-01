// Order.ts
import { Schema, model, Document } from 'mongoose';

export interface Order extends Document {
    customerId: string;
    tailorId: string;
    placedDate: Date;
    deliveryDate: Date;
    orderStatus: string;
    amount: number;
    dresses: string[]; 
}

const orderSchema = new Schema<Order>({
    customerId: { type: String, required: true },
    tailorId: { type: String, required: true },
    placedDate: { type: Date, default: Date.now },
    deliveryDate: { type: Date, required: true },
    orderStatus: { type: String, default: "pending" },
    amount: { type: Number, required: true },
    dresses: { type: [String], required: true },
});

const OrderModel = model<Order>('Order', orderSchema);

export default OrderModel;
