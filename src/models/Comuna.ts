import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/database';

interface ComunaAttributes {
  id: number;
  name: string;
  codeLocation: string;   //puede almacenar el ubigeo (Peru) o el codigo_Dga de Chile
}

export type ComunaCreationAttributes = Optional<ComunaAttributes, 'id'>;

class Comuna extends Model<ComunaAttributes, ComunaCreationAttributes> implements ComunaAttributes {
  public id!: number;
  public name!: string;
  public codeLocation!: string;
}

Comuna.init(
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
    codeLocation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Comuna',
    tableName: 'comuna',
    timestamps: true,
  }
);

export default Comuna;