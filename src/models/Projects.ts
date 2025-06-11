import { Model, DataTypes, DateOnlyDataType, DecimalDataType, DecimalDataTypeOptions } from "sequelize";
import sequelize from "../config/database";
import { Json } from "sequelize/types/utils";

interface ProjectsAttributes {
    id: bigint;
    client: bigint;   //llave foranea con Clients
    code_internal: string;
    name: string;
    description: Text;
    comuna: bigint;
    start_date: DateOnlyDataType;
    end_date: DateOnlyDataType;
    budget_estimate: DecimalDataType;
    cost_real: DecimalDataType;
    margin_real: DecimalDataType;
    custom_fields: Json;
    createdAt?: Date;
    updatedAt?: Date;
};

class Project extends Model<ProjectsAttributes> implements ProjectsAttributes {
    public id!: bigint;
    public client!: bigint;   //llave foranea con Clients
    public code_internal!: string;
    public name!: string;
    public description!: Text;
    public comuna!: bigint;
    public start_date!: DateOnlyDataType;
    public end_date!: DateOnlyDataType;
    public budget_estimate!: DecimalDataType;
    public cost_real!: DecimalDataType;
    public margin_real!: DecimalDataType;
    public custom_fields!: Json;   //opcional?

    // Timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
};

Project.init(
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        client: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        code_internal: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        comuna: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        start_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        end_date: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        budget_estimate: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true,
        },
        cost_real: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true,
        },
        margin_real: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true,
        },
        custom_fields: {
            type: DataTypes.JSON,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: 'User',
        tableName: 'users',
        timestamps: false,
    }
);
export default Project;