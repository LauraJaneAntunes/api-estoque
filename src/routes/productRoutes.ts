import express from 'express';
import { validationResult } from 'express-validator';
import Product from '../models/productModel';
import Stock from '../models/stockModel';
import productValidation from '../middleware/productValidation';
import authenticate from '../middleware/authenticate';

const router = express.Router();

router.post('/', authenticate, productValidation, async (req:any, res:any) => {
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

router.get('/', authenticate, async (req:any, res:any) => {
  try {
    const products = await Product.findAll();
    return res.json(products);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
});

router.get('/:id', authenticate, async (req:any, res:any) => {
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

router.put('/:id', authenticate, productValidation, async (req:any, res:any) => {
  const { id } = req.params;
  const { name, description, price } = req.body;

  try {
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    await product.update({ name, description, price });
    return res.json(product);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao atualizar produto' });
  }
});

router.delete('/:id', authenticate, async (req:any, res:any) => {
  const { id } = req.params;
  try {
    // Exclui os registros vinculados na tabela `stocks`
    await Stock.destroy({ where: { productId: id } });
    // Exclui o produto após a exclusão dos registros vinculados
    await Product.destroy({ where: { id } });
    return res.status(204).send();
  } catch (error) {
    console.error('Error deleting product:', error);
    return res.status(500).json({ error: 'Erro ao deletar o produto' });
  }
});

router.delete('/', authenticate, async (req: any, res: any) => {
  const { ids } = req.body;
  if (!ids || !Array.isArray(ids)) {
    return res.status(400).send('IDs são necessários');
  }

  try {
    await Stock.destroy({ 
      where: { 
        productId: ids 
      } 
    });
    await Product.destroy({
      where: {
        id: ids
      }
    });
    res.send('Produtos deletados com sucesso.');
  } catch (error) {
    res.status(500).send('Erro ao deletar esses produtos.');
  }
});

export default router;
