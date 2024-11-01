import { Schema, model, Document } from 'mongoose';

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
    dress: string[];
}

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
    status: {type: String, required: true},
    dress: { type: [String], required: true }, 
});

const TailorModel = model<Tailor>('Tailor', tailorSchema);

export default TailorModel;
