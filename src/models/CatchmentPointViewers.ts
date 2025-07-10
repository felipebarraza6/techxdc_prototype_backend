import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

class CatchmentPointViewer extends Model {}

CatchmentPointViewer.init(
  {
    catchment_point_id: {
      type: DataTypes.INTEGER,
      references: { model: "catchmentPoint", key: "id" },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: { model: "users", key: "id" },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
  },
  {
    sequelize,
    modelName: "CatchmentPointViewer",
    tableName: "catchment_point_viewers",
    timestamps: false,
  }
);

export default CatchmentPointViewer;
