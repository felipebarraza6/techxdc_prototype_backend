import { Model, DataTypes, DecimalDataType, ForeignKey, Optional } from "sequelize";
import sequelize from "../config/database";
import Project from "./Projects";
import User from "./User";
import { Json } from "sequelize/types/utils";

interface catchmentPointAttributes {
    id: number;
    projectId: ForeignKey<Project['id']>;
    title: string;
    latitude: DecimalDataType;
    longitude: DecimalDataType;
    ownerUser: ForeignKey<User['id']>;
    viewersUser: Json;
    nettra: boolean;
    twin: boolean;
    novus: boolean;
    frecuency: string;
};

export type CatchmentPointCreationAttributes = Optional<catchmentPointAttributes, 'id'>;

class catchmentPoint extends Model<catchmentPointAttributes, CatchmentPointCreationAttributes> implements catchmentPointAttributes {
    public id!: number;
    public projectId!: ForeignKey<Project['id']>;;
    public title!: string;
    public latitude!: DecimalDataType;
    public longitude!: DecimalDataType;
    public ownerUser!: ForeignKey<User['id']>;
    public viewersUser!: Json
    public nettra!: boolean;
    public twin!: boolean;
    public novus!: boolean;
    public frecuency!: string
};

catchmentPoint.init(
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
                model: 'Project', 
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        latitude: {
            type: DataTypes.DECIMAL(9, 6),
            allowNull: false,
        },
        longitude: {
            type: DataTypes.DECIMAL(9, 6),
            allowNull: false,
        },
        ownerUser: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'User', 
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        }, 
        viewersUser: {
            type: DataTypes.JSON,
            allowNull: false,
        }, 
        nettra: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
        twin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
        novus: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
        frecuency: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'CatchmentPoint',
        tableName: 'catchmentPoint',
        timestamps: true,
    }
);

Project.hasMany(catchmentPoint, {
    foreignKey: "projectId",
    sourceKey: 'id',
    as: "projectCatchmentPoint",
});

catchmentPoint.belongsTo(Project, {
    foreignKey: "projectId",
    targetKey: "id",
    as: "Project",
});

User.hasMany(catchmentPoint, {
    foreignKey: "ownerUser",
    sourceKey: 'id',
    as: "userQuotation",
});

catchmentPoint.belongsTo(User, {
    foreignKey: "ownerUser",
    targetKey: "id",
    as: "User",
});

export default catchmentPoint;
