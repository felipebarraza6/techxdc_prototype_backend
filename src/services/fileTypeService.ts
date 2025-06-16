import FileType from "../models/FileType"; 

export const FileTypeService = {
    getAllTypeFiles: async () => {
        return await FileType.findAll();
    },
    getTypeFileById: async (id: number) => {
        return await FileType.findByPk(id);
    },
    createTypeFile: async (data: { name: string; description?: string }) => {
        return await FileType.create(data);
    },
    updateTypeFile: async (id: number, data: { name?: string; description?: string }) => {
        const typeFile = await FileType.findByPk(id);
        if (!typeFile) {
            throw new Error("Tipo de archivo no encontrado");
        }
        return await typeFile.update(data);
    },
    deleteTypeFile: async (id: number) => {
        const typeFile = await FileType.findByPk(id);
        if (!typeFile) {
            throw new Error("Tipo de archivo no encontrado");
        }
        return await typeFile.destroy();
    }
};