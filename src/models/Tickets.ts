import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";
import { TicketPriority } from "../types/TicketType";

interface TicketAttributes {
  id: number;
  title: string;
  description?: string;
  created_by: number;
  client_id: number;
  designated: number;
  priority: TicketPriority;
  custom_fields?: object | null;
  createdAt?: Date;
  updatedAt?: Date;
}

interface TicketCreationAttributes extends Optional<
  TicketAttributes,
  "id" | "description" | "custom_fields" | "createdAt" | "updatedAt"
> {}

class Ticket extends Model<TicketAttributes, TicketCreationAttributes>
  implements TicketAttributes {
  public id!: number;
  public title!: string;
  public description?: string;
  public created_by!: number;
  public client_id!: number;
  public designated!: number;
  public priority!: TicketPriority;
  public custom_fields?: object | null;
    // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static associate(models: any) {
    Ticket.belongsTo(models.Client, { foreignKey: "client_id", as: "client" });
    Ticket.belongsTo(models.User, { foreignKey: "created_by", as: "creator" });
    Ticket.belongsTo(models.User, { foreignKey: "designated", as: "designatedUser" });
    Ticket.hasMany(models.ResponseTicket, { foreignKey: "ticket_id", as: "responses" });
  }
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
      type: DataTypes.ENUM(
        TicketPriority.LOW,
        TicketPriority.MEDIUM,
        TicketPriority.HIGH
      ),
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
  }
);

export default Ticket;
