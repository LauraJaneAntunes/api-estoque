import express from 'express';
import { createProduct, getProducts, updateProduct, deleteProduct, getProductById, deleteAllProducts } from '../controllers/productController';
import productValidation from '../middleware/productValidation';
import authenticate from '../middleware/authenticate';
import asyncHandler from '../middleware/asyncHandler';

const router = express.Router();

router.post('/', authenticate, productValidation, asyncHandler(createProduct));
router.get('/', authenticate, asyncHandler(getProducts));
router.get('/:id', authenticate, asyncHandler(getProductById)); 
router.put('/:id', authenticate, productValidation, asyncHandler(updateProduct));
router.delete('/:id', authenticate, asyncHandler(deleteProduct));
router.delete('/', authenticate, asyncHandler(deleteAllProducts));

export default router;
