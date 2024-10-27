import mongoose, {Schema, Document} from 'mongoose';

export interface ReviewDoc extends Document {
    customerId: string,
    tailorId: string,
    rating: number,
    comment: string,
    createdAt: Date,
}

const reviewSchema = new Schema<ReviewDoc>({
    customerId: {type: String, required: true},
    tailorId: {type: String, required: true},
    rating: {type: Number, required: true, min: 1, max: 5},
    comment: {type: String, required: false},
    createdAt: {type: Date, default: Date.now}
});

export default mongoose.model<ReviewDoc>('Review', reviewSchema);