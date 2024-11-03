import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Product extends Model {
  public id!: number;
  public name!: string;
  public description!: string;
  public image!: Buffer;
  public price!: number;
  public quantity!: number;
}

Product.init(
  {
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    image: { type: DataTypes.BLOB, allowNull: true },
    price: { type: DataTypes.FLOAT, allowNull: false },
    quantity: {type: DataTypes.INTEGER, allowNull: false},
  },
  {
    sequelize,
    modelName: 'Product',
    tableName: 'products',
    timestamps: false,
  }
);

export default Product;
