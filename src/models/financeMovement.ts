import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../config/database";
import { TypeFinanceMovement } from "../types/financeMovementTypes"

interface financeMovementsAttributes {
    id: number;
    type: TypeFinanceMovement;
    amount: number;
    projectId: number;
    description: string;
    date: Date;
};

export type FinanceMovementCreationAttributes = Optional<financeMovementsAttributes, 'id'>;

class FinanceMovement extends Model<financeMovementsAttributes, FinanceMovementCreationAttributes> implements financeMovementsAttributes {
    public id!: number;
    public type!: TypeFinanceMovement;
    public projectId!: number;
    public amount!: number;   
    public description!: string;
    public date!: Date;
};

FinanceMovement.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        type: {
            type: DataTypes.ENUM(...Object.values(TypeFinanceMovement)),
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
                model: 'Projects', 
                key: 'id',
            },
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'FinanceMovement',
        tableName: 'financeMovement',
        timestamps: true,
    }
);


export default FinanceMovement;