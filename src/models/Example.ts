import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

interface ExampleAttributes {
  id: number;
  name: string;
  description: string;
}

class Example extends Model<ExampleAttributes> implements ExampleAttributes {
  public id!: number;
  public name!: string;
  public description!: string;
}

Example.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Example',
  }
);

export default Example;
