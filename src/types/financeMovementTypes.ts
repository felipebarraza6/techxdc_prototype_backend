export enum TypeFinanceMovement {
    INCOME = "income",
    EXPENSE = "expense",
    ADVANCE = "advance"
}

export interface CreateFinanceMovementRequest{
    projectId: number;
    description: string;
    amount: number;
    date: Date;
    type: TypeFinanceMovement;
}