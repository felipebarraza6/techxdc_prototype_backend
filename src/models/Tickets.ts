import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Ticket extends Model {
  public id!: number;
  public title!: string;
  public description?: string;
  public created_by!: number;
  public client_id!: number;
  public designated!: number;
  public priority!: "low" | "medium" | "high";
  public custom_fields?: Record<string, any>;
  public readonly created_at!: Date;
  public readonly modified_at!: Date;
}

Ticket.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "clients",
        key: "id_clients",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    designated: {
      type: DataTypes.INTEGER,
      allowNull: false,
      
    },
    priority: {
      type: DataTypes.ENUM("low", "medium", "high"),
      allowNull: false,
    },
    custom_fields: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Ticket",
    tableName: "tickets",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "modified_at",
  }
);

export default Ticket;