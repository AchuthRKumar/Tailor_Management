import mongoose, {Document, Schema} from 'mongoose';

export interface Dress{
    name: string;
    chest: number;
    waist: number;
    length: number;
    sleeve: number;
    inseam: number;
    collar: number;
}
export interface MeasurementDocument extends Document {
    custId: string;
    orderId: string;
    dress: Dress[];
}

const dressSchema: Schema = new Schema<Dress>({
    name: {type: String, required: true},
    chest: {type: Number, required: false},
    waist: {type: Number, required: false},
    length: {type: Number, required: false},
    sleeve: {type: Number, required: false},
    inseam: {type: Number, required: false},
    collar: {type: Number, required: false}
});

const MeasurementSchema: Schema = new Schema ({
    custId: {type: String, required: true},
    orderId: {type: String, required: true},
    dress: {type: [dressSchema], required: true}

});

export default mongoose.model<MeasurementDocument>('Measurement', MeasurementSchema);