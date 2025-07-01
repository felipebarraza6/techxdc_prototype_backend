import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../config/database";

interface catchmentPointAttributes {
    id: number;
    projectId: number;
    title: string;
    latitude: number;
    longitude: number;
    ownerUser: number;
    viewersUser?: object | null;
    nettra?: boolean | null;
    twin?: boolean | null;
    novus?: boolean | null;
    frecuency?: string  | null;
};

export type CatchmentPointCreationAttributes = Optional<catchmentPointAttributes, 'id'>;

class CatchmentPoint extends Model<catchmentPointAttributes, CatchmentPointCreationAttributes> implements catchmentPointAttributes {
    public id!: number;
    public projectId!: number;
    public title!: string;
    public latitude!: number;
    public longitude!: number;
    public ownerUser!: number;
    public viewersUser?: object | null
    public nettra?: boolean | null;
    public twin?: boolean | null;
    public novus?: boolean | null;
    public frecuency!: string | null;
};

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
                model: 'Projects', 
                key: 'id',
            },
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
                model: 'Users', 
                key: 'id',
            },
        }, 
        viewersUser: {
            type: DataTypes.JSON,
            allowNull: true,
        }, 
        nettra: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        twin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        novus: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        frecuency: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: 'CatchmentPoint',
        tableName: 'catchmentPoint',
        timestamps: true,
    }
);



export default CatchmentPoint;
