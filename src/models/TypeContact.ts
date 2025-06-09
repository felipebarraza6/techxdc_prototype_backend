import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class TypeContact extends Model {
  public id!: number;
  public type!: string;
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
    timestamps: false, // no tiene created_at ni modified_at
  }
);

export default TypeContact;
