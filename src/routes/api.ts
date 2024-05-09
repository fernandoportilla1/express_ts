import { Router } from 'express';
import productRoute from '../modules/product/product.route';

const router = Router();

router.use('/products', productRoute);

export default router;
