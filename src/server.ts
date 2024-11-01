import app from './app';
import sequelize from './config/database';

const startServer = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log('Banco de dados sincronizado com sucesso.');

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}. Acesse http://localhost:${PORT}/api`);
    });
  } catch (error) {
    console.error('Erro ao sincronizar o banco de dados:', error);
  }
};

startServer();
