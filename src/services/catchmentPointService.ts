import CatchmentPoint from "../models/CatchmentPoint";
import { CatchmentPointCreationAttributes } from '../models/CatchmentPoint';
import { CreateCatchmentPointRequest } from "../types/catchmentPointTypes";

export const CatchmentPointService = {
    getAllCatchmentPoint: async () => {
        return await CatchmentPoint.findAll();
    },
    getCatchmentPointById: async (id: number) => {
        return await CatchmentPoint.findByPk(id);
    },
    createCatchmentPoint: async (catchmentPointData: CreateCatchmentPointRequest) => {
        return await CatchmentPoint.create(catchmentPointData);
    },
    updateCatchmentPoint: async (id: number, catchmentPointData: Partial<CatchmentPointCreationAttributes>) => {
        const catchmentPoint = await CatchmentPoint.findByPk(id);
        if (!catchmentPoint) {
            throw new Error("Punto de Captacion No Existe");
        }
        return await catchmentPoint.update(catchmentPointData);
    },
    deleteCatchmentPoint: async (id: number) => {
        const catchmentPoint = await CatchmentPoint.findByPk(id);
        if (!catchmentPoint) {
            throw new Error("Punto de Captacion No Existe");
        }
        await CatchmentPoint.destroy();
        return { message: 'Punto de Captacion Eliminado correctamente' };
    }
};