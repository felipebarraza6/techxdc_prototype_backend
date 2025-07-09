import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

interface ClientModuleAttributes {
  id: number;
  module_id: number;
  enabled_to_type: 'project' | 'client' | 'quote';
  reference_id: number;
  is_enabled: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

interface ClientModuleCreationAttributes
  extends Optional<ClientModuleAttributes, "id" | "createdAt" | "updatedAt"> { }

class ClientModule extends Model<ClientModuleAttributes, ClientModuleCreationAttributes>
  implements ClientModuleAttributes {
  public id!: number;
  public module_id!: number;
  public enabled_to_type!: 'project' | 'client' | 'quote';
  public reference_id!: number;
  public is_enabled!: boolean;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

}

ClientModule.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    module_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: "modules",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    },
    enabled_to_type: {
      type: DataTypes.ENUM("project", "client", "quote"),
      allowNull: false,
    },
    reference_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    is_enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "ClientModule",
    tableName: "modules_enabled",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "modified_at",
  }
);

export default ClientModule;
