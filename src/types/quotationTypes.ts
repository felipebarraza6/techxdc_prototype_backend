export enum TypeQuotation {
    DRAFT = "draft",
    SENT = "sent",
    APPROVED = "approved",
    REJECTED = "rejected"
}

export interface CreateQuotationRequest{
    clientId: number;
    linkedProject: number;
    estimatedAmount: number;
    marginEstimate: number;
    date: Date;
    status: TypeQuotation;
    createdBy: number;
    file: number;
}