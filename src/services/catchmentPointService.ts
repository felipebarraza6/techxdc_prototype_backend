import CatchmentPoint from "../models/CatchmentPoint";
import User from "../models/User";
import { CreateCatchmentPointRequest } from "../types/catchmentPointTypes";

export const CatchmentPointService = {
    getAllCatchmentPoint: async () => {
        return await CatchmentPoint.findAll({
            include: [
                {
                    model: User,
                    as: "viewers",
                    attributes: ["id"],
                    through: { attributes: [] },
                },
            ],
        });
    },
    getCatchmentPointById: async (id: number) => {
        return await CatchmentPoint.findByPk(id, {
            include: [
                {
                    model: User,
                    as: "viewers",
                    attributes: ["id"],
                    through: { attributes: [] }, // evita campos extras
                }
            ]
        });
    },
    createCatchmentPoint: async (data: CreateCatchmentPointRequest) => {
        const { viewers, ...rest } = data;
        const point = await CatchmentPoint.create(rest);

        if (viewers && viewers.length > 0) {
            await (point as any).setViewers(viewers); // <-- relación real
        }

        return point;
    },

    updateCatchmentPoint: async (id: number, catchmentPointData: Partial<CreateCatchmentPointRequest>) => {
        const point = await CatchmentPoint.findByPk(id);
        if (!point) throw new Error("Punto de Captación no encontrado");

        const { viewers, ...rest } = catchmentPointData;
        await point.update(rest);

        if (viewers) {
            await (point as any).setViewers(viewers);
        }
        return point;
    },

    deleteCatchmentPoint: async (id: number) => {
        const point = await CatchmentPoint.findByPk(id);
        if (!point) {
            throw new Error("Punto de Captacion no existe");
        }
        await point.destroy();
        return { message: 'Punto de Captacion eliminado correctamente' };
    }
};