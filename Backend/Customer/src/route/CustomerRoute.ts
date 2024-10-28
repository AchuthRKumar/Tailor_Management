import express from 'express';
import { addCustomer, getAll, updateCustomer, deleteCustomer} from '../controller/CustomerController';

const router = express.Router();

router.get('/', getAll);
router.post('/', addCustomer);
router.patch('/:id', updateCustomer as any);
router.delete('/:id', deleteCustomer as any);

export default router;