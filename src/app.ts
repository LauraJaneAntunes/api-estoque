import express from 'express';
import cors from 'cors';
import productRoutes from './routes/productRoutes';
import userRoutes from './routes/userRoutes';
import { json } from 'body-parser';

// Inicializa o Express
const app = express();

// Middlewares globais
app.use(cors());  // Habilita o CORS para permitir que o frontend se comunique com o backend
app.use(json());  // Faz o parse do corpo das requisições no formato JSON

// Rotas
app.use('/api/products', productRoutes);  // Define as rotas relacionadas a produtos
app.use('/api/users', userRoutes);        // Define as rotas relacionadas a usuários

// Middleware para tratamento de erros (exemplo básico)
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Algo deu errado!', error: err.message });
});

// Middleware para rotas não encontradas
app.use((req: express.Request, res: express.Response) => {
  res.status(404).json({ message: 'Rota não encontrada' });
});

export default app;
