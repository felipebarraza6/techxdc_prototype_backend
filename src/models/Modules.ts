import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

interface ModuleAttributes {
  id: number;
  slug: string;
  description: string;
}

interface ModuleCreationAttributes extends Optional<ModuleAttributes, "id"> {}

class Module extends Model<ModuleAttributes, ModuleCreationAttributes> implements ModuleAttributes {
  public id!: number;
  public slug!: string;
  public description!: string;

  static associate(models: any) {
    Module.hasMany(models.ClientModule, {
      foreignKey: "module_id",
      as: "clientModules",
    });
  }
}

Module.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Module",
    tableName: "modules",
    timestamps: false, // confirmado por el modelo
  }
);

export default Module;
