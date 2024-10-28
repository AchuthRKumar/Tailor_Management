// orderRoutes.ts
import { Router } from 'express';
import { OrderController } from '../controller/orderController';

const router = Router();

router.get('/orders/tailor/:tailorId', OrderController.getOrdersByTailor);
router.get('/orders/customer/:customerId', OrderController.getOrdersByCustomer);
router.post('/orders', OrderController.postOrder);
router.put('/orders/tailor/:orderId', OrderController.updateOrderByTailor);
router.put('/orders/customer/:orderId', OrderController.updateOrderByCustomer);

export default router;
