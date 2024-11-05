// tailorRoutes.ts
import { Router } from 'express';
import { TailorController } from '../controllers/tailorController';

const router = Router();

router.get('/', TailorController.getAllTailors);
router.get('/:tailorId', TailorController.getTailorById);
router.get('/uid/:firebaseUid', TailorController.getByUid);
router.post('/', TailorController.createTailor);
router.put('/:tailorId', TailorController.updateTailor);
router.delete('/:tailorId', TailorController.deleteTailor);
router.get('/:tailorId/review', TailorController.getReviews);
router.get('/dress/:dress', TailorController.getTailorsByDress);


export default router;
