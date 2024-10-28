// tailorRoutes.ts
import { Router } from 'express';
import { TailorController } from '../controllers/tailorController';

const router = Router();

router.get('/tailors', TailorController.getAllTailors);
router.get('/tailors/:tailorId', TailorController.getTailorById);
router.post('/tailors', TailorController.createTailor);
router.put('/tailors/:tailorId', TailorController.updateTailor);
router.delete('/tailors/:tailorId', TailorController.deleteTailor);

export default router;
