import express from 'express';
import sequelize from './config/database';  // Conexão com o banco de dados
import productRoutes from './routes/productRoutes';  // Rotas de produtos
import userRoutes from './routes/userRoutes';        // Rotas de usuários
import { json } from 'body-parser';

// Inicializa o Express
const app = express();
app.use(express.json());

// Middlewares
app.use(json());  // Faz o parse do corpo das requisições no formato JSON

// Rota Hello World
app.get('/api', (req, res) => {
  res.send('Hello World');
});

// Definir rotas
app.use('/api/products', productRoutes);  // Rotas para gerenciamento de produtos
app.use('/api/users', userRoutes);        // Rotas para gerenciamento de usuários

// Sincronizar o banco de dados e iniciar o servidor
const startServer = async () => {
  try {
    // Sincronizar o banco de dados com os modelos
    await sequelize.sync({ alter: true });  // `alter: true` ajusta o schema se necessário
    console.log('Banco de dados sincronizado com sucesso.');

    // Iniciar o servidor na porta 3000
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}. Acesse http://localhost:${PORT}/api`);
    });
  } catch (error) {
    console.error('Erro ao sincronizar o banco de dados:', error);
  }
};

// Iniciar o servidor
startServer();
