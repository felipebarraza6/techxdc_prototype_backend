import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

// Atributos del modelo
interface TypeContactAttributes {
  id: number;
  type: string;
}

interface TypeContactCreationAttributes extends Optional<TypeContactAttributes, "id"> { }

class TypeContact extends Model<TypeContactAttributes, TypeContactCreationAttributes>
  implements TypeContactAttributes {
  public id!: number;
  public type!: string;

  static associate(models: any) {
    // Se accede a Contact desde models (evita import circular)
    TypeContact.hasMany(models.Contact, {
      foreignKey: "type",
      as: "contactsWithThisType",
    });
  }
}

TypeContact.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "TypeContact",
    tableName: "type_contact",
    timestamps: false,
  }
);

export default TypeContact;
