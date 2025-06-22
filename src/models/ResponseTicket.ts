import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import Ticket from "./Tickets";

class ResponseTicket extends Model {
  public id!: number;
  public ticket_id!: number;
  public message!: string;
  public created_by!: string;
  public readonly created_at!: Date;
  public readonly modified_at!: Date;
}

ResponseTicket.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    ticket_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    modified_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "ResponseTicket",
    tableName: "response_ticket",
    timestamps: false,
  }
);

// Asociación con Ticket
ResponseTicket.belongsTo(Ticket, {
  foreignKey: "ticket_id",
  as: "ticket",
});
Ticket.hasMany(ResponseTicket, {
  foreignKey: "ticket_id",
  as: "responses",
});

export default ResponseTicket;
