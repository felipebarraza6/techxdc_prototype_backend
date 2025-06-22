import { DateOnlyDataType, DecimalDataType } from "sequelize";

export enum typeFinanceMovemente {
    INCOME = "income",
    EXPENSE = "expense",
    ADVANCE = "advance"
}

export interface CreateFinanceMovementRequest{
    projectId: number;
    description: Text;
    amount: DecimalDataType;
    date: DateOnlyDataType;
    type: typeFinanceMovemente;
}