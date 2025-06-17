import Comuna from "../models/Comuna";
// import { ComunaCreationAttributes } from '../models/Comuna';
import { CreateComunaRequest } from "../types/comunaTypes";

export const ComunaService = {
    getAllComuna: async () => {
        return await Comuna.findAll();
    },
    getComunaById: async (id: number) => {
        return await Comuna.findByPk(id);
    },
    createComuna: async (comunaData: CreateComunaRequest) => {
        return await Comuna.create(comunaData);
    },
    updateComuna: async (id: number, comunaData: Partial<CreateComunaRequest>) => {
        const comuna = await Comuna.findByPk(id);
        if (!comuna) {
            throw new Error("Comuna No Existe");
        }
        return await comuna.update(comunaData);
    },
    deleteComuna: async (id: number) => {
        const comuna = await Comuna.findByPk(id);
        if (!comuna) {
            throw new Error("Comuna No Existe");
        }
        await comuna.destroy();
        return { message: 'Comuna Eliminada correctamente' };
    }
};
