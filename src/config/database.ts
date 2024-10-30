import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('estoque', 'root', 'MySQLSenh@123', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
