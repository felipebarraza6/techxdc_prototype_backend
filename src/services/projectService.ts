import Project, { ProjectCreationAttributes } from "../models/Projects";
import { CreateProjectRequest } from "../types/projectTypes";

export const ProjectService = {
    getAllProjects: async () => {
        return await Project.findAll();
    },
    getProjectById: async (id: number) => {
        return await Project.findByPk(id);
    },
    createProject: async (projectData: CreateProjectRequest) => {
        return await Project.create(projectData);
    },
    updateProject: async (id: number, projectData: Partial<ProjectCreationAttributes>) => {
        const project = await Project.findByPk(id);
        if (!project) {
            throw new Error("Proyecto No Existe");
        }
        return await project.update(projectData);
    },
    deleteProject: async (id: number) => {
        const project = await Project.findByPk(id);
        if (!project) {
            throw new Error("Proyecto No Existe");
        }
        await project.destroy();
        return { message: 'Proyecto Eliminado correctamente' };
    }
};