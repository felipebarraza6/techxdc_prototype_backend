export interface CreateCatchmentPointRequest{
    projectId: number;
    title: string;
    latitude: number;
    longitude: number;
    ownerUser: number;
    viewersUser: object;
    nettra: boolean;
    twin: boolean;
    novus: boolean;
    frecuency: string;
}