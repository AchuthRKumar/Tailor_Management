// orderRoutes.ts
import { Router } from 'express';
import { OrderController } from '../controller/orderController';

const router = Router();

router.get('/tailor/:tailorId', OrderController.getOrdersByTailor);
router.get('/customer/:customerId', OrderController.getOrdersByCustomer);
router.post('/', OrderController.postOrder);
router.put('/tailor/:orderId', OrderController.updateOrderByTailor);
router.put('/customer/:orderId', OrderController.updateOrderByCustomer);

export default router;
