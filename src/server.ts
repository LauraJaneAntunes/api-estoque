import express from 'express';
import sequelize from './config/database';
import productRoutes from './routes/productRoutes';
import userRoutes from './routes/userRoutes';
import { json } from 'body-parser';

const app = express();
app.use(express.json());

app.use(json());

// Rota Hello World
app.get('/api', (req, res) => {
  res.send('Hello World');
});

app.use('/api/produtos', productRoutes);
app.use('/api/usuarios', userRoutes);

const startServer = async () => {
  try {
    
    await sequelize.sync({ alter: true });
    console.log('Banco de dados sincronizado com sucesso.');

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}. Acesse http://localhost:${PORT}/api`);
    });
  } catch (error) {
    console.error('Erro ao sincronizar o banco de dados:', error);
  }
};

startServer();
