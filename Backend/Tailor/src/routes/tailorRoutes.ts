// tailorRoutes.ts
import { Router } from 'express';
import { TailorController } from '../controllers/tailorController';

const router = Router();

router.get('/', TailorController.getAllTailors);
router.get('/:tailorId', TailorController.getTailorById);
router.post('/', TailorController.createTailor);
router.put('/:tailorId', TailorController.updateTailor);
router.delete('/:tailorId', TailorController.deleteTailor);
router.get('/:tailorId/review', TailorController.getReviews);

export default router;
