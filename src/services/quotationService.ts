import { QuotationCreationAttributes } from "../models/Quotation";
import quotation from "../models/Quotation";
import { CreateQuotationRequest } from "../types/quotationTypes";

export const QuotationService = {
    getAllQuotation: async () => {
        return await quotation.findAll();
    },
    getQuotationById: async (id: number) => {
        return await quotation.findByPk(id);
    },
    createQuotation: async (quotationData: CreateQuotationRequest) => {
        return await quotation.create(quotationData);
    },
    updateQuotation: async (id: number, quotationData: Partial<QuotationCreationAttributes>) => {
        const quotation1 = await quotation.findByPk(id);
        if (!quotation1) {
            throw new Error("Cotización No Existe");
        }
        return await quotation1.update(quotationData);
    },
    deleteQuotation: async (id: number) => {
        const quotation1 = await quotation.findByPk(id);
        if (!quotation1) {
            throw new Error("Cotizacion No Existe");
        }
        await quotation1.destroy();
        return { message: 'Cotizacion Eliminada correctamente' };
    }
};