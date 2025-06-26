// src/models/StatusTicket.ts
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';
import Ticket from './Tickets';
import { StatusTicketState } from '../types/TicketType';

// Atributos del modelo
interface StatusTicketAttributes {
  id: number;
  ticketId: number;
  status: StatusTicketState;
  name: string;
  description?: string;
  created_at?: Date;
  modified_at?: Date;
}

// Atributos requeridos para creación
interface StatusTicketCreationAttributes
  extends Optional<StatusTicketAttributes, 'id' | 'created_at' | 'modified_at'> {}

class StatusTicket
  extends Model<StatusTicketAttributes, StatusTicketCreationAttributes>
  implements StatusTicketAttributes {
  public id!: number;
  public ticketId!: number;
  public status!: StatusTicketState;
  public name!: string;
  public description?: string;
  public readonly created_at!: Date;
  public readonly modified_at!: Date;

  static associate() {
    StatusTicket.belongsTo(Ticket, {
      foreignKey: 'ticketId',
      as: 'ticket',
    });
    Ticket.hasMany(StatusTicket, {
      foreignKey: 'ticketId',
      as: 'statusHistory',
    });
  }
}

StatusTicket.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ticketId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'tickets', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    status: {
      type: DataTypes.ENUM(
        StatusTicketState.OPEN,
        StatusTicketState.IN_PROGRESS,
        StatusTicketState.CLOSED,
        StatusTicketState.ON_HOLD
      ),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    modified_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'StatusTicket',
    tableName: 'status_ticket',
    timestamps: false, 
  }
);

export default StatusTicket;
