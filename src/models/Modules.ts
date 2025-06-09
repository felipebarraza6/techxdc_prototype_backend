import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import ClientModule from "./ClientModule";

/**
 * Modelo Sequelize para `modules`
 */
class Module extends Model {
  public id!: number;
  public slug!: string;
  public description!: string;
}

Module.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Module",
    tableName: "modules",
    timestamps: false, // el modelo NO tiene created_at ni updated_at
  }
);

Module.hasMany(ClientModule, {
  foreignKey: "module_id",
  as: "clientModules",
});
ClientModule.belongsTo(Module, {
  foreignKey: "module_id",
  as: "module",
});
// Sincronizar el modelo con la base de datos
(async () => {  
    try {
        await sequelize.sync({ alter: true });
        console.log("✅ Modelo 'Module' sincronizado con la base de datos.");
    } catch (error) {
        console.error("❌ Error al sincronizar el modelo 'Module':", error);
    }
    })();
    
export default Module;
