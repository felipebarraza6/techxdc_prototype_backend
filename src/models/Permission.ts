import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../config/database";
import Group from "./Group";
import Module from "./Modules";

interface PermissionAttributes {
    id: number;
    can_create: boolean;
    can_read: boolean;
    can_update: boolean;
    can_delete: boolean;
    group_id: number;
    module_id: number;
    created_at?: Date;
    updated_at?: Date;
};

interface PermissionCreationAttributes extends Optional<PermissionAttributes, 'id' | 'created_at' | 'updated_at'> {}

class Permission extends Model<PermissionAttributes, PermissionCreationAttributes> implements PermissionAttributes {
    public id!: number;
    public can_create!: boolean;
    public can_read!: boolean;
    public can_update!: boolean;
    public can_delete!: boolean;
    public group_id!: number;
    public module_id!: number;

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    static associate() {
        Permission.belongsTo(Group, { foreignKey: 'group_id', as: 'group' });
        Permission.belongsTo(Module, { foreignKey: 'module_id', as: 'module' });
};
} 


Permission.init(
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        can_create: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        can_read: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        can_update: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        can_delete: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        group_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Group,
                key: 'id',
            }
        },
        module_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Module,
                key: 'id',
            }
        }
},
{
    sequelize,
    modelName: 'Permission',
    tableName: 'permissions',
    timestamps: true,
});

export default Permission;