import express from 'express';
import { validationResult } from 'express-validator';
import Product from '../models/productModel';
import Stock from '../models/stockModel';
import productValidation from '../middleware/productValidation';

const router = express.Router();

router.post('/products', productValidation, async (req:any, res:any) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, description, price, quantity } = req.body;

  try {
    const product = await Product.create({ name, description, price });
    await Stock.create({ productId: product.id, quantity });

    return res.json(product);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao criar produto' });
  }
});

router.get('/', async (req:any, res:any) => {
  try {
    const products = await Product.findAll();
    return res.json(products);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
});

router.get('/:id', async (req:any, res:any) => {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    return res.json(product);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao buscar produto' });
  }
});


export default router;
