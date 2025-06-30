import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

interface ClientAttributes {
  id: number;
  name: string;
  dni: string;
  address?: string;
  comuna?: string;
  phone?: string;
  industry?: string;
  status?: string;
  score?: number;
  custom_fields?: object | null;
  createdAt?: Date;
  updatedAt?: Date;
}

interface ClientCreationAttributes extends Optional<
  ClientAttributes,
  "id" | "address" | "comuna" | "phone" | "industry" | "status" | "score" | "custom_fields" | "createdAt" | "updatedAt"
> {}

class Client extends Model<ClientAttributes, ClientCreationAttributes> implements ClientAttributes {
  public id!: number;
  public name!: string;
  public dni!: string;
  public address?: string;
  public comuna?: string;
  public phone?: string;
  public industry?: string;
  public status?: string;
  public score?: number;
  public custom_fields?: object | null;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static associate(models: any) {
    Client.hasMany(models.Contact, {
      foreignKey: "id_client",
      as: "contacts",
    });
  }
}

Client.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dni: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    comuna: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    industry: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    custom_fields: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Client",
    tableName: "clients",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "modified_at",
  }
);

export default Client;
