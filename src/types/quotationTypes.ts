import { DateOnlyDataType, DecimalDataType } from "sequelize";

export enum typeQuotation {
    DRAFT = "draft",
    SENT = "sent",
    APPROVED = "approved",
    REJECTED = "rejected"
}

export interface CreateQuotationRequest{
    clientId: number;
    linkedProject: number;
    estimatedAmount: DecimalDataType;
    marginEstimate: DecimalDataType;
    date: DateOnlyDataType;
    status: typeQuotation;
    createdBy: number;
    file: number;
}