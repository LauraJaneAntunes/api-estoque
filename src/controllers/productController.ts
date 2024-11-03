import { Request, Response } from 'express';
import fs from 'fs';
import Product from '../models/productModel';

// Função para criar um produto
export const createProduct = async (req: Request, res: Response) => {
  const { name, description, price, quantity} = req.body;
  let imageBuffer: Buffer | null = null;

  try {

    // Processamento de imagem
    if (req.file) {
      imageBuffer = req.file.buffer;

    }

    // Criação do produto no banco de dados
    const product = await Product.create({ name, description, price, quantity, image: imageBuffer });

    return res.status(201).json(product);
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    return res.status(500).json({ error: 'Erro ao criar produto' });
  }
};

// Função para buscar todos os produtos
export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.findAll();
    return res.json(products);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
};

// Função para buscar um produto por ID
export const getProductById = async (req: Request, res: Response) => {
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
};

// Função para atualizar um produto por ID
export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, description, price, quantity } = req.body;
  let updatedFields: any = { name, description, price, quantity };

  try {
    
    if (req.file) {
      const imageBuffer = req.file.buffer; // Captura o buffer diretamente
      updatedFields.image = imageBuffer; // Atualiza o campo de imagem
    }

    await Product.update(updatedFields, { where: { id } });
    const updatedProduct = await Product.findByPk(id);

    return res.json(updatedProduct);
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    return res.status(500).json({ error: 'Erro ao atualizar produto' });
  }
};

// Função para deletar todos os produtos
export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    if (product.image) {
      fs.unlinkSync(product.image); // Excluir a imagem do sistema de arquivos
    }

    await Product.destroy({ where: { id } });
    return res.status(204).send();
  } catch (error) {
    console.error('Erro ao deletar produto:', error);
    return res.status(500).json({ error: 'Erro ao deletar produto' });
  }
};

// Função para deletar todos os produtos
export const deleteAllProducts = async (req: Request, res: Response) => {
  try {
    await Product.destroy({ where: {} });
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao deletar todos os produtos' });
  }
};