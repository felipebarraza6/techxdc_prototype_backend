import User from "../models/User";

export const findAllUsers = async () => {
  return await User.findAll();
}

export const findUserById = async (id: number) => {
  return await User.findByPk(id);
}

export const createUser = async (userData: any) => {
  if (!userData.group_id){
    throw new Error("El usuario debe pertenecer a un grupo");
  }
  return await User.create(userData);
};

export const updateUser = async (id: number, userData: any) => {
  const user = await User.findByPk(id);
  if (!user) {
    throw new Error("Usuario no encontrado");
  }
  return await user.update(userData);
};

