import { Request, Response } from 'express';
import Product from '../models/productModel';
import Stock from '../models/stockModel';

export const createProduct = async (req: Request, res: Response) => {
  const { name, description, price, quantity } = req.body;

  try {
    const product = await Product.create({ name, description, price });
    await Stock.create({ productId: product.id, quantity });

    return res.status(201).json(product);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao criar produto' });
  }
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.findAll();
    return res.json(products);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, description, price } = req.body;

  try {
    await Product.update({ name, description, price }, { where: { id } });
    const updatedProduct = await Product.findByPk(id);
    return res.json(updatedProduct);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao atualizar produto' });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await Product.destroy({ where: { id } });
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao deletar produto' });
  }
};
