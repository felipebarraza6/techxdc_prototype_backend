import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../config/database";

interface GroupAttributes {
    id: number;
    name: string;
    description?: string | null;
    createdAt?: Date;
    updatedAt?: Date;
};

interface GroupCreationAttributes extends Optional<GroupAttributes, 'id' | 'createdAt' | 'updatedAt'> { }

class Group extends Model<GroupAttributes, GroupCreationAttributes> implements GroupAttributes {
    public id!: number;
    public name!: string;
    public description?: string | null;

    // Timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

};

Group.init(
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
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: 'Group',
        tableName: 'groups',
        timestamps: true,
    }
);

export default Group;