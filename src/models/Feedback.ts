// src/models/Feedback.ts
import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";
import Ticket from "./Tickets";
import Client from "./Clients";

interface FeedbackAttributes {
  id: number;
  ticket_id: number;
  client_id: number;
  rating: number;
  comments?: string;
  created_at?: Date;
}

interface FeedbackCreationAttributes
  extends Optional<FeedbackAttributes, "id" | "comments" | "created_at"> {}

class Feedback
  extends Model<FeedbackAttributes, FeedbackCreationAttributes>
  implements FeedbackAttributes
{
  public id!: number;
  public ticket_id!: number;
  public client_id!: number;
  public rating!: number;
  public comments?: string;
  public readonly created_at!: Date;
}

Feedback.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ticket_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: Ticket, key: "id" },
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: Client, key: "id" },
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "Feedback",
    tableName: "sh_feedback",
    timestamps: false,
  }
);

// Relacionar con Ticket y Client
Feedback.belongsTo(Ticket, { foreignKey: "ticket_id", as: "ticket" });
Feedback.belongsTo(Client, { foreignKey: "client_id", as: "client" });

export default Feedback;
