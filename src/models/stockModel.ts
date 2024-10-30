import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import Product from './productModel';

class Stock extends Model {
  public productId!: number;
  public quantity!: number;
}

Stock.init(
  {
    productId: { type: DataTypes.INTEGER, allowNull: false, references: { model: Product, key: 'id' } },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    sequelize,
    modelName: 'Stock',
  }
);

export default Stock;
