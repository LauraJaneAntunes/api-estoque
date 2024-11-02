import express from 'express';
import { validationResult } from 'express-validator';
import User from '../models/userModel';
import userValidation from '../middleware/userValidation';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import authenticate from '../middleware/authenticate';

const router = express.Router();
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN as string;

router.post('/cadastrar', userValidation, async (req: any, res: any) => {
  console.log('Recebendo requisição para cadastrar usuário:', req.body);
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log('Erros de validação:', errors.array());
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password, role } = req.body;

  try {
    const user = await User.create({ name, email, password });
    console.log('Usuário cadastrado com sucesso:', user);
    return res.json(user);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    return res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

router.post('/login', async (req: any, res: any) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    const isPasswordValid = await user.checkPassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Senha incorreta.' });
    }

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

    return res.status(200).json({ message: "Login bem-sucedido", token });
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    return res.status(500).json({ error: "Erro ao fazer login" });
  }
});

router.get('/', authenticate, async (req: any, res: any) => {
  console.log('Recebendo requisição para buscar usuários');

  try {
    const users = await User.findAll();
    console.log('Usuários encontrados:', users);
    return res.json(users);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    return res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});

router.get('/:id', authenticate, async (req: any, res: any) => {
  const { id } = req.params;
  console.log(`Recebendo requisição para buscar usuário com ID: ${id}`);

  try {
    const user = await User.findByPk(id);
    if (!user) {
      console.log('Usuário não encontrado com ID:', id);
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    console.log('Usuário encontrado:', user);
    return res.json(user);
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    return res.status(500).json({ error: 'Erro ao buscar usuário' });
  }
});

router.put('/:id', authenticate, userValidation, async (req: any, res: any) => {
  const { id } = req.params;
  const { name, email, role } = req.body;
  console.log(`Recebendo requisição para atualizar usuário com ID: ${id}`, req.body);

  try {
    const user = await User.findByPk(id);
    if (!user) {
      console.log('Usuário não encontrado para atualização com ID:', id);
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    await user.update({ name, email });
    console.log('Usuário atualizado com sucesso:', user);
    return res.json(user);
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    return res.status(500).json({ error: 'Erro ao atualizar usuário' });
  }
});

router.delete('/:id', authenticate, async (req: any, res: any) => {
  const { id } = req.params;
  console.log(`Recebendo requisição para deletar usuário com ID: ${id}`);

  try {
    const user = await User.findByPk(id);
    if (!user) {
      console.log('Usuário não encontrado para deletar com ID:', id);
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    await user.destroy();
    console.log('Usuário deletado com sucesso:', id);
    return res.status(204).send();
  } catch (error) {
    console.error('Erro ao deletar usuário:', error);
    return res.status(500).json({ error: 'Erro ao deletar usuário' });
  }
});

router.delete('/', authenticate, async (req: any, res: any) => {
  const { ids } = req.body;
  if (!ids || !Array.isArray(ids)) {
    return res.status(400).send('IDs são necessários');
  }

  try {
    await User.destroy({
      where: {
        id: ids
      }
    });
    res.send('Usuários deletados com sucesso.');
  } catch (error) {
    res.status(500).send('Erro ao deletar usuários.');
  }
});


export default router;
