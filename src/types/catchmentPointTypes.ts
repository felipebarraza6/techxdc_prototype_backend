import { DecimalDataType } from "sequelize";
import { Json } from "sequelize/types/utils";

export interface CreateCatchmentPointRequest{
    projectId: number;
    title: string;
    latitude: DecimalDataType;
    longitude: DecimalDataType;
    ownerUser: number;
    viewersUser: Json;
    nettra: boolean;
    twin: boolean;
    novus: boolean;
    frecuency: string;
}