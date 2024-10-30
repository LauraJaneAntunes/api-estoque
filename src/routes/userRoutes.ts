import express from 'express';
import bcrypt from 'bcryptjs';
import { validationResult } from 'express-validator';
import User from '../models/userModel';
import userValidation from '../middleware/userValidation';


const router = express.Router();

router.post(  '/users', userValidation, async (req:any, res:any) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password, role } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword, role });

    return res.json(user);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

// Adicione isso ao seu arquivo userRoutes.ts
router.get('/', async (req:any, res:any) => {
  try {
    const users = await User.findAll();
    return res.json(users);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});

router.get('/:id', async (req:any, res:any) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao buscar usuário' });
  }
});


export default router;
