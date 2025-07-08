import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../config/database";

interface FileTypeAttributes {
    id: number;
    name: string;
    description?: string | null;
    createdAt?: Date;
    updatedAt?: Date;
};

interface FileTypeCreationAttributes extends Optional<FileTypeAttributes, 'id' | 'description' | 'createdAt' | 'updatedAt'> { }

class FileType extends Model<FileTypeAttributes, FileTypeCreationAttributes> implements FileTypeAttributes {
    public id!: number;
    public name!: string;
    public description?: string | null;

    // Timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

};

FileType.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: "FileType",
        tableName: "type_files",
        timestamps: true,
    }
);

export default FileType;