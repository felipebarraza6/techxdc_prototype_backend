export interface CreateProjectRequest{
    clientId: number;
    codeInternal: string;
    name: string;
    description: string;
    comunaId: number;
    startDate: Date;
    endDate?: Date | null;
    budgetEstimate: number;
    costReal?: number | null;
    marginReal?: number | null;
    customFields?: object | null;
}