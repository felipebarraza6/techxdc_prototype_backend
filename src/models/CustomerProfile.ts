import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class CustomerProfile extends Model {
  public id!: number;
  public name!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

CustomerProfile.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    modelName: 'CustomerProfile',
    tableName: 'customer_profiles',
    timestamps: true,
  }
);

export default CustomerProfile;
