import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../config/database";
import User from "./User";
import CatchmentPoint from "./CatchmentPoint";
import FileType from "./FileType";
import ResponseTicket from "./ResponseTicket";
import Quotation from "./Quotation";


interface FileAttributes {
    id: number;
    catchment_point_id: number;
    file_name: string;
    file_path: string;
    file_type_id: number;
    description?: string | null;
    expiration_date?: Date | null;
    is_valid?: boolean;
    response_ticket_id?: number | null;
    quotation_id?: number | null;
    uploaded_by: number;
    createdAt?: Date;
    updatedAt?: Date;
}

interface FileCreationAttributes extends Optional<FileAttributes, 'id' | 'description' | 'expiration_date' | 'is_valid' | 'response_ticket_id' | 'quotation_id' | 'createdAt' | 'updatedAt'> { }

class File extends Model<FileAttributes, FileCreationAttributes> implements FileAttributes {
    public id!: number;
    public catchment_point_id!: number;
    public file_name!: string;
    public file_path!: string;
    public file_type_id!: number;
    public description?: string | null;
    public expiration_date?: Date | null;
    public is_valid?: boolean;
    public response_ticket_id?: number | null;
    public quotation_id?: number | null;
    public uploaded_by!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

};

File.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        catchment_point_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: CatchmentPoint,
                key: 'id',
            }
        },
        file_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        file_path: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        file_type_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: FileType,
                key: 'id',
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        expiration_date: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        is_valid: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
        response_ticket_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: ResponseTicket,
                key: 'id',
            }
        },
        uploaded_by: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: 'id',
            }
        },
        quotation_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: Quotation,
                key: 'id',
            }
        }
    },
    {
        sequelize,
        modelName: 'File',
        tableName: 'files',
        timestamps: true,
    }
);

export default File;