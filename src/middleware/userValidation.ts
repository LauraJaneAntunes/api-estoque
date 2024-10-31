import { body } from 'express-validator';

const userValidation = [
  body('name').notEmpty().isLength({ min: 3 }).withMessage('O nome do usuário é obrigatório e deve conter pelo menos 3 caracteres.'),
  body('email').notEmpty().withMessage('O e-mail é obrigatório.').isEmail().withMessage('O e-mail deve ser válido.'),
  body('password').isLength({ min: 6 }).withMessage('A senha é obrigatória e deve ter no mínimo 6 caracteres.').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[_@#\$%\^&\*\!\?\-])[A-Za-z\d_@#\$%\^&\*\!\?]+$/)
  .withMessage('A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial.'),
  body('role').notEmpty().isIn(['administrador', 'gerente', 'usuario']).withMessage('É obrigatório dizer se você é administrador, gerente ou usuário.'),
];

export default userValidation;