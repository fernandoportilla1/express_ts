import { Router } from 'express';
import { getAllProduct } from './product.controller';

const router = Router();

router.get('/', getAllProduct);

export default router;
