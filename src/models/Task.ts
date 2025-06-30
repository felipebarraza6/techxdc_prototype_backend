import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../config/database";
import User from "./User";
import { TaskStatus } from "../types/taskTypes";

interface TaskAttributes {
    id: number;
    title: string;
    description?: string | null;
    status: TaskStatus;
    created_by: number;
    createdAt?: Date;
    updatedAt?: Date;
}

interface TaskCreationAttributes extends Optional<TaskAttributes, "id" | "description" | "createdAt" | "updatedAt"> { }

class Task extends Model<TaskAttributes, TaskCreationAttributes> implements TaskAttributes {
    public id!: number;
    public title!: string;
    public description!: string;
    public status!: TaskStatus;
    public created_by!: number;

    // Timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

};

Task.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        status: {
            type: DataTypes.ENUM(...Object.values(TaskStatus)),
            allowNull: false,
            defaultValue: TaskStatus.PENDING,
        },
        created_by: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: "id",
            },
        },
    },
    {
        sequelize,
        modelName: "Task",
        tableName: "tasks",
        timestamps: true,
    }
);

export default Task;
