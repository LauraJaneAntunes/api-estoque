import express from 'express';
import cors from 'cors';
import productRoutes from './routes/productRoutes';
import userRoutes from './routes/userRoutes';
import { json } from 'body-parser';

const app = express();

app.use(cors({
   origin: 'http://localhost:3000' // URL do Front
}));

app.use(json());

app.get('/api', (req, res) => {
  res.send('Hello World');
});

app.use('/api/produtos', productRoutes);
app.use('/api/usuarios', userRoutes);

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Algo deu errado!', error: err.message });
});

app.use((req: express.Request, res: express.Response) => {
  res.status(404).json({ message: 'Rota não encontrada' });
});

export default app;
