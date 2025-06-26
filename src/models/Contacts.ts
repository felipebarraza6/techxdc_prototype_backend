import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";
import Client from "./Clients";
import TypeContact from "./TypeContact";

interface ContactAttributes {
  id: number;
  id_client: number;
  name: string;
  email: string;
  phone?: string;
  position?: string;
  custom_fields?: object | null;
  type: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface ContactCreationAttributes extends Optional<
  ContactAttributes,
  "id" | "phone" | "position" | "custom_fields" | "createdAt" | "updatedAt"
> {}

class Contact extends Model<ContactAttributes, ContactCreationAttributes>
  implements ContactAttributes {
  public id!: number;
  public id_client!: number;
  public name!: string;
  public email!: string;
  public phone?: string;
  public position?: string;
  public custom_fields?: object | null;
  public type!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static associate() {
    Contact.belongsTo(Client, {
      foreignKey: "id_client",
      as: "client",
    });

    Contact.belongsTo(TypeContact, {
      foreignKey: "type",
      as: "typeContact",
    });
  }
}

Contact.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    id_client: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    custom_fields: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    type: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Contact",
    tableName: "contacts",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "modified_at",
  }
);

export default Contact;
