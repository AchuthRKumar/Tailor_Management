// Tailor.ts
import { Schema, model, Document } from 'mongoose';

export interface Tailor extends Document {
    name: string;
    shopName: string;
    location: string;
    contact: string;
    rating: number;
    revenue: number;
    ordersCount: number;
}

const tailorSchema = new Schema<Tailor>({
    name: { type: String, required: true },
    shopName: { type: String, required: true },
    location: { type: String, required: true },
    contact: { type: String, required: true },
    rating: { type: Number, default: 0 },
    revenue: { type: Number, default: 0 },
    ordersCount: { type: Number, default: 0 },
});

const TailorModel = model<Tailor>('Tailor', tailorSchema);

export default TailorModel;
