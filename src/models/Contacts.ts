import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";
import Client from "./Clients";
import TypeContact from "./TypeContact";

/**
 * Atributos del modelo Contact
 */
interface ContactAttributes {
  id_contacts: number;
  id_client: number;
  name: string;
  email: string;
  phone?: string;
  position?: string;
  custom_fields?: object;
  type: number;
  created_at?: Date;
  modified_at?: Date;
}

/**
 * Atributos requeridos para creación (omitimos los autogenerados)
 */
interface ContactCreationAttributes extends Optional<ContactAttributes, "id_contacts" | "created_at" | "modified_at"> {}

/**
 * Modelo Sequelize para `contacts`
 */
class Contact extends Model<ContactAttributes, ContactCreationAttributes> implements ContactAttributes {
  public id_contacts!: number;
  public id_client!: number;
  public name!: string;
  public email!: string;
  public phone!: string;
  public position!: string;
  public custom_fields!: object;
  public type!: number;
  public readonly created_at!: Date;
  public readonly modified_at!: Date;
}

Contact.init(
  {
    id_contacts: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_client: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "clients", // nombre real de la tabla en la DB
        key: "id_clients",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
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
      type: DataTypes.JSONB,
      allowNull: true,
    },
    type: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: "type_contact", // el nombre exacto de la tabla en SQLite
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
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

// Relaciones

// Relación con Client
Contact.belongsTo(Client, {
  foreignKey: "id_client",
  as: "client",
});
Client.hasMany(Contact, {
  foreignKey: "id_client",
  as: "contacts",
});

// Relación con TypeContact
Contact.belongsTo(TypeContact, {
  foreignKey: "type",
  as: "typeContact",
});
TypeContact.hasMany(Contact, {
  foreignKey: "type",
  as: "contactsWithThisType",
});

export default Contact;
