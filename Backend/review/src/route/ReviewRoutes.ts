import express from 'express';
import { addReview, getReviews, pReview, nReview } from '../controller/ReviewController';

const router = express.Router();

router.post('/:customerId', addReview );
router.get('/:tailorId', getReviews);
router.get('/p', pReview);
router.get('/n', nReview);

export default router;

