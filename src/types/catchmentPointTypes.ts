export interface CreateCatchmentPointRequest{
    projectId: number;
    title: string;
    ownerUser: number;
    viewers?: number[];
    id_api_telemetry: number;
    code_dga: string;
}