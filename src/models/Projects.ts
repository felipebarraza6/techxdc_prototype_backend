import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../config/database";

interface ProjectsAttributes {
    id: number;
    clientId: number;   //llave foranea con Clients
    codeInternal: string;
    name: string;
    description?: string | null;
    comunaId: number;
    startDate: Date;
    endDate?: Date | null;
    budgetEstimate: number;
    costReal?: number  | null;
    marginReal?: number | null;
    customFields?: object | null;
};

export type ProjectCreationAttributes = Optional<ProjectsAttributes, 'id'>;

class Project extends Model<ProjectsAttributes, ProjectCreationAttributes> implements ProjectsAttributes {
    public id!: number;
    public clientId!: number;   //llave foranea con Clients
    public codeInternal!: string;
    public name!: string;
    public description?: string;
    public comunaId!: number;
    public startDate!: Date;
    public endDate?: Date;
    public budgetEstimate!: number;
    public costReal?: number;
    public marginReal?: number;
    public customFields?: object | null;   //opcional?
};

Project.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        clientId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Clients', 
                key: 'id',
            },
            // onUpdate: 'CASCADE',
            // onDelete: 'RESTRICT',
        },
        codeInternal: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        comunaId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Comuna', 
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'RESTRICT',
        },
        startDate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        endDate: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        budgetEstimate: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true,
        },
        costReal: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true,
        },
        marginReal: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true,
        },
        customFields: {
            type: DataTypes.JSON,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: 'Project',
        tableName: 'projects',
        timestamps: true,
    }
);

export default Project;