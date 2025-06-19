import Module from "../models/Modules";
import { CreateModuleRequest, UpdateModuleRequest } from "../types/moduleTypes";

export const createModule = async (data: CreateModuleRequest) => {
  const module = await Module.create({ ...data });
  return module;
};

export const getAllModules = async () => {
  const modules = await Module.findAll();
  return modules;
};

export const getModuleById = async (id: number) => {
  const module = await Module.findByPk(id);
  return module;
};

export const updateModule = async (id: number, data: UpdateModuleRequest) => {
  const module = await Module.findByPk(id);
  if (!module) return null;
  await module.update(data);
  return module;
};

export const deleteModule = async (id: number) => {
  const module = await Module.findByPk(id);
  if (!module) return null;
  await module.destroy();
  return true;
};
