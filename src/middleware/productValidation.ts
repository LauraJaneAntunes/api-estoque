import { body } from 'express-validator';

const productValidation = [
  body('name').notEmpty().withMessage('O nome do produto é obrigatório.'),
  body('description').notEmpty().withMessage('A descrição do produto é obrigatória.'),
  body('price').isFloat({ min: 0 }).withMessage('O preço deve ser um número positivo.'),
  body('quantity').isInt({ min: 0 }).withMessage('A quantidade deve ser um número inteiro positivo.'),
];

export default productValidation;
