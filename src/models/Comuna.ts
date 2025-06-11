import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

interface ComunaAttributes {
  id: bigint;
  name: string;
  code_location: string;   //puede almacenar el ubigeo (Peru) o el codigo_Dga de Chile
}

class Comuna extends Model<ComunaAttributes> implements ComunaAttributes {
  public id!: bigint;
  public name!: string;
  public code_location!: string;
}

Comuna.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code_location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Comuna',
    tableName: 'comuna',
  }
);

export default Comuna;