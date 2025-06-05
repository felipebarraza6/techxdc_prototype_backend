import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import Module from "./Modules"; 

class ClientModule extends Model {
  public id!: number;
  public name!: string;
  public client_id!: number;
  public is_active!: boolean;
  public module_id!: number;
}

ClientModule.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "clients",
        key: "id_clients",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
    module_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "modules", // importante: el nombre exacto de la tabla
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  },
  {
    sequelize,
    modelName: "ClientModule",
    tableName: "client_modules",
    timestamps: true,
  }
);

// Relación con Modules
ClientModule.belongsTo(Module, {
  foreignKey: "module_id",
  as: "module",
});

// Sincronizar el modelo con la base de datos
(async () => {  
    try {
        await sequelize.sync({ alter: true });
        console.log("✅ Modelo 'ClientModule' sincronizado con la base de datos.");
    } catch (error) {
        console.error("❌ Error al sincronizar el modelo 'ClientModule':", error);
    }
})();
// Exportar el modelo para usarlo en otros archivos 

export default ClientModule;