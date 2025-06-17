import FinanceMovement from "../models/financeMovement";
import { FinanceMovementCreationAttributes } from '../models/financeMovement';
import { CreateFinanceMovementRequest } from "../types/financeMovementTypes";

export const FinanceMovementService = {
    getAllFinanceMovement: async () => {
        return await FinanceMovement.findAll();
    },
    getFinanceMovementById: async (id: number) => {
        return await FinanceMovement.findByPk(id);
    },
    createFinanceMovement: async (financeMovementData: CreateFinanceMovementRequest) => {
        return await FinanceMovement.create(financeMovementData);
    },
    updateFinanceMovement: async (id: number, financeMovementData: Partial<FinanceMovementCreationAttributes>) => {
        const financeMovement = await FinanceMovement.findByPk(id);
        if (!financeMovement) {
            throw new Error("Movimiento Financiero No Existe");
        }
        return await financeMovement.update(financeMovementData);
    },
    deleteFinanceMovement: async (id: number) => {
        const financeMovement = await FinanceMovement.findByPk(id);
        if (!financeMovement) {
            throw new Error("Movimiento Financiero No Existe");
        }
        await FinanceMovement.destroy();
        return { message: 'Movimiento Finaciero Eliminado correctamente' };
    }
};