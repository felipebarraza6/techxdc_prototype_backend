import { Model, DataTypes, DateOnlyDataType, DecimalDataType, ForeignKey, Optional } from "sequelize";
import sequelize from "../config/database";
import Project from "./Projects";

interface financeMovementsAttributes {
    id: number;
    type: 'income' | 'expense' | 'advance';
    amount: DecimalDataType;
    projectId: ForeignKey<Project['id']>;
    description: Text;
    date: DateOnlyDataType;
};

export type FinanceMovementCreationAttributes = Optional<financeMovementsAttributes, 'id'>;

class financeMovement extends Model<financeMovementsAttributes, FinanceMovementCreationAttributes> implements financeMovementsAttributes {
    public id!: number;
    public type!: 'income' | 'expense' | 'advance';
    public projectId!: ForeignKey<Project['id']>;
    public amount!: DecimalDataType;   
    public description!: Text;
    public date!: DateOnlyDataType;
};

financeMovement.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        type: {
            type: DataTypes.ENUM('income', 'expense', 'advance'),
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
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
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: 'FinanceMovement',
        tableName: 'financeMovement',
        timestamps: true,
    }
);

Project.hasMany(financeMovement, {
    foreignKey: "projectId",
    sourceKey: 'id',
    as: "projectFinanceMovement",
});

financeMovement.belongsTo(Project, {
    foreignKey: "projectId",
    targetKey: "id",
    as: "Project",
});

export default financeMovement;