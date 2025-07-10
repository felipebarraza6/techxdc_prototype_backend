import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

interface ResponseTicketAttributes {
  id: number;
  ticket_id: number;
  message: string;
  created_by: number;
  created_at?: Date;
  modified_at?: Date;
}

interface ResponseTicketCreationAttributes
  extends Optional<ResponseTicketAttributes, "id" | "created_at" | "modified_at"> {}

class ResponseTicket extends Model<ResponseTicketAttributes, ResponseTicketCreationAttributes>
  implements ResponseTicketAttributes {
  public id!: number;
  public ticket_id!: number;
  public message!: string;
  public created_by!: number;
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
      references: {
        model: 'tickets',
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'      
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
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

export default ResponseTicket;