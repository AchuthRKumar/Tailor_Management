import { Schema, model, Document } from 'mongoose';

export interface Dress {
    name: string;
    price: number;
}

export interface Tailor extends Document {
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
}

const dressSchema = new Schema<Dress>({
    name: { type: String, required: true },
    price: { type: Number, required: true }
});

const tailorSchema = new Schema<Tailor>({
    name: { type: String, required: true },
    shopName: { type: String, required: true },
    location: { type: String, required: false }, 
    phone: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    revenue: { type: Number, default: 0 },
    ordersCount: { type: Number, default: 0 },
    completed: { type: Number, default: 0 },
    status: { type: String, required: true },
    isDelivery: { type: String, required: true },  
    dress: { type: [dressSchema], required: true } 
});

const TailorModel = model<Tailor>('Tailor', tailorSchema);

export default TailorModel;
