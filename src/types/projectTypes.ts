import { DateOnlyDataType, DecimalDataType } from "sequelize";
import { Json } from "sequelize/types/utils";

export interface CreateProjectRequest{
    clientId: number;
    codeInternal: string;
    name: string;
    description: Text;
    comunaId: number;
    startDate: DateOnlyDataType;
    endDate?: DateOnlyDataType | null;
    budgetEstimate: DecimalDataType;
    costReal?: DecimalDataType | null;
    marginReal?: DecimalDataType | null;
    customFields?: Json | null;
}