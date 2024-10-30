// Usando o Sequelize como ORM afim de evitar a manipulação do BD manualmente
import { Sequelize } from 'sequelize';

// Cria uma instância do Sequelize para se conectar ao MySQL
const sequelize = new Sequelize('estoque', 'root', 'senha', {
  host: 'localhost',    // Host onde o MySQL está rodando (localhost no caso)
  dialect: 'mysql',     // Dialeto do banco de dados, que neste caso é MySQL
});

// Exporta a instância do Sequelize para ser usada em outros lugares da aplicação
export default sequelize;
