import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Product extends Model {
  public id!: number;
  public name!: string;
  public description!: string;
  public image!: Buffer;
  public price!: number;
}

Product.init(
  {
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    image: { type: DataTypes.BLOB, allowNull: true },
    price: { type: DataTypes.FLOAT, allowNull: false },
  },
  {
    sequelize,
    modelName: 'Product',
  }
);

export default Product;
