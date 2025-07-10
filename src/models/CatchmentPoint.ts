import {
  Model,
  DataTypes,
  Optional,
  Association,
  NonAttribute,
} from "sequelize";
import sequelize from "../config/database";
import User from "./User";

interface CatchmentPointAttributes {
  id: number;
  projectId: number;
  title: string;
  ownerUser: number;
  id_api_telemetry: number;
  code_dga: string;
  token_api_telemetry: string;
}

export type CatchmentPointCreationAttributes = Optional<
  CatchmentPointAttributes,
  "id"
>;

class CatchmentPoint
  extends Model<CatchmentPointAttributes, CatchmentPointCreationAttributes>
  implements CatchmentPointAttributes
{
  public id!: number;
  public projectId!: number;
  public title!: string;
  public ownerUser!: number;
  public id_api_telemetry!: number;
  public code_dga!: string;
  public token_api_telemetry!: string;

  public viewers?: NonAttribute<User[]>;

  public static associations: {
    viewers: Association<CatchmentPoint, User>;
  };
}

CatchmentPoint.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    projectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "projects",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ownerUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    id_api_telemetry: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    code_dga: {
      type: DataTypes.STRING(8),
      allowNull: false,
      validate: {
        len: {
          args: [8, 8],
          msg: "El código DGA debe tener exactamente 8 caracteres",
        },
      },
    },
    token_api_telemetry: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "CatchmentPoint",
    tableName: "catchmentPoint",
    timestamps: true,
  }
);

export default CatchmentPoint;
