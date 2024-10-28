import mongoose, {Document, Schema} from 'mongoose';

export interface MeasurementDocument extends Document {
    custId: string;
    chest: number;
    waist: number;
    height: number;
    sleeve: number;
}

const MeasurementSchema: Schema = new Schema ({
    custId: {type: String, required: true},
    chest: {type: Number, required: true},
    waist: {type: Number, required: true},
    height: {type: Number, required:true},
    sleeve: {type: Number, required: true}
});

export default mongoose.model<MeasurementDocument>('Measurement', MeasurementSchema);