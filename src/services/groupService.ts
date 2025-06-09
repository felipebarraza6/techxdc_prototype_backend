import Group from '../models/Group';

export const GroupService = {
    getAllGroups: async () => {
       return await Group.findAll();
    },

    getGroupById: async (id: number) => {
        return await Group.findByPk(id);
    },
    createGroup: async (groupData: {
        name: string;
        description?: string;
    }) => {
        return await Group.create(groupData);
    },
    updateGroup: async (id: number, groupData: {
        name?: string;
        description?: string;
    }) => {
        const group = await Group.findByPk(id);
        if (!group) {
            throw new Error('No existe un grupo con este ID');
        }
        return await group.update(groupData);
    },
    deleteGroup: async (id: number) => {
        const group = await Group.findByPk(id);
        if (!group) {
            throw new Error('No existe un grupo con este ID');
        }
        await group.destroy();
        return group
    }
}