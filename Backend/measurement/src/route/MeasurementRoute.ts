import express from 'express';
import { getMeasurement, addMeasurement, updateMeasurement } from '../controller/MeasurementController';

const router = express.Router();

router.get('/:custId', getMeasurement);
router.post('/', addMeasurement);
router.put('/:custId', updateMeasurement as any); // Add this line for updating measurements

export default router;
