import { Model, DataTypes, DateOnlyDataType, DecimalDataType, ForeignKey, Optional } from "sequelize";
import sequelize from "../config/database";
import { Json } from "sequelize/types/utils";
import Comuna from "./Comuna";
import Client from "./Client"

interface ProjectsAttributes {
    id: number;
    clientId: ForeignKey<Client['id']>;   //llave foranea con Clients
    codeInternal: string;
    name: string;
    description: Text;
    comunaId: ForeignKey<Comuna['id']>;
    startDate: DateOnlyDataType;
    endDate: DateOnlyDataType;
    budgetEstimate: DecimalDataType;
    costReal: DecimalDataType;
    marginReal: DecimalDataType;
    customFields: Json;
};

export type ProjectCreationAttributes = Optional<ProjectsAttributes, 'id'>;

class Project extends Model<ProjectsAttributes, ProjectCreationAttributes> implements ProjectsAttributes {
    public id!: number;
    public clientId!: ForeignKey<Client['id']>;   //llave foranea con Clients
    public codeInternal!: string;
    public name!: string;
    public description!: Text;
    public comunaId!: ForeignKey<Comuna['id']>;
    public startDate!: DateOnlyDataType;
    public endDate!: DateOnlyDataType;
    public budgetEstimate!: DecimalDataType;
    public costReal!: DecimalDataType;
    public marginReal!: DecimalDataType;
    public customFields!: Json;   //opcional?
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
                model: 'Client', 
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'RESTRICT',
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
            allowNull: false,
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

Comuna.hasMany(Project, {
    foreignKey: "comunaId",
    sourceKey: 'id',
    as: "projectComuna",
});

Project.belongsTo(Comuna, {
    foreignKey: "comunaId",
    targetKey: "id",
    as: "comuna",
});

Client.hasMany(Project, {
    foreignKey: "clientId",
    sourceKey: 'id',
    as: "projectClient",
});

Project.belongsTo(Client, {
    foreignKey: "clientId",
    targetKey: "id",
    as: "client",
});
export default Project;