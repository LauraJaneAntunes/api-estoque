import { Request, Response } from 'express';
import User from '../models/userModel';

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password, role } = req.body;

  try {
    const user = await User.create({ name, email, password, role });
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao criar usuário' });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    return res.json(users);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email, role } = req.body;

  try {
    await User.update({ name, email, role }, { where: { id } });
    const updatedUser = await User.findByPk(id);
    return res.json(updatedUser);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao atualizar usuário' });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await User.destroy({ where: { id } });
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao deletar usuário' });
  }
};
