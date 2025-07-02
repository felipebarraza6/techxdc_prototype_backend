import File from "../models/File";
import { CreateFileRequest, FileAttributes } from "../types/fileTypes";

export const FileService = {
    getAllFiles: async () => {
        return await File.findAll({
            include: ['uploader', 'catchmentPoint', 'fileType', 'responseTicket']
        });
},

    getFileById: async (id: number) => {
        return await File.findByPk(id, {
            include: ['uploader', 'catchmentPoint', 'fileType', 'responseTicket']
        });
    },

    createFile: async (fileData: CreateFileRequest) => {
        return await File.create(fileData);
    },

    updateFile: async (id: number, fileData: Partial<FileAttributes>) => {
        const file = await File.findByPk(id);
        if (!file) {
            throw new Error('Archivo no encontrado');
        }
        await file.update(fileData);
        return file;
    },

    deleteFile: async (id: number) => {
        const file = await File.findByPk(id);
        if (file) {
            return await file.destroy();
        }
        throw new Error('Archivo no encontrado');
    }
};

