// src/models/Feedback.ts
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

interface FeedbackAttributes {
  id: number;
  ticket_id: number;
  client_id: number;
  rating: number;
  comments?: string;
  created_at?: Date;
}

interface FeedbackCreationAttributes
  extends Optional<FeedbackAttributes, 'id' | 'comments' | 'created_at'> { }

class Feedback extends Model<FeedbackAttributes, FeedbackCreationAttributes>
  implements FeedbackAttributes {
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
      references: {
        model: 'tickets',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'clients',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
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
    modelName: 'Feedback',
    tableName: 'sh_feedback',
    timestamps: false,
  }
);

export default Feedback;
