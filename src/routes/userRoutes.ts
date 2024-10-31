import express from 'express';
import bcrypt from 'bcryptjs';
import { validationResult } from 'express-validator';
import User from '../models/userModel';
import userValidation from '../middleware/userValidation';
import jwt from 'jsonwebtoken';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "seu_segredo_jwt";

router.post('/register', userValidation, async (req:any, res:any) => {
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

router.post('/login', async (req:any, res:any) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Senha incorreta" });
    }

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: "Login bem-sucedido", token });
  } catch (error) {
    res.status(500).json({ error: "Erro ao fazer login" });
  }
});

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

router.put('/:id', userValidation, async (req:any, res:any) => {
  const { id } = req.params;
  const { name, email, role } = req.body;

  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    await user.update({ name, email, role });
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao atualizar usuário' });
  }
});

router.delete('/:id', async (req:any, res:any) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    await user.destroy();
    return res.status(204).send();
  } catch (error) {
    console.error('Error deleting user:', error);
    return res.status(500).json({ error: 'Erro ao deletar usuário' });
  }
});

export default router;
