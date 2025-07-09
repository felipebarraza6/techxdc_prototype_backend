import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../config/database";

interface ExampleAttributes {
  id: number;
  name: string;
  description: string;
}

interface ExampleCreationAttributes extends Optional<ExampleAttributes, "id"> {}

class Example
  extends Model<ExampleAttributes, ExampleCreationAttributes>
  implements ExampleAttributes
{
  public id!: number;
  public name!: string;
  public description!: string;
}

Example.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Example",
  }
);

export default Example;
