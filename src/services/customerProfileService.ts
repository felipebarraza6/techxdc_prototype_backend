import CustomerProfile from "../models/CustomerProfile";

export const CustomerProfileService = {
    getAllCustomerProfiles: async () => {
        return await CustomerProfile.findAll();
    },
    getCustomerProfileById: async (id: number) => {
        return await CustomerProfile.findByPk(id);
    },  
    createCustomerProfile: async (profileData: { name: string }) => {
        return await CustomerProfile.create(profileData);
    },
    updateCustomerProfile: async (id: number, profileData: { name?: string }) => {
        const profile = await CustomerProfile.findByPk(id);
        if (!profile) {
            throw new Error('Perfil de cliente no encontrado');
        }
        await profile.update(profileData);
        return profile;
    },
    deleteCustomerProfile: async (id: number) => {
        const profile = await CustomerProfile.findByPk(id);
        if (profile) {
            return await profile.destroy();
        }
        throw new Error('Perfil de cliente no encontrado');
    }
}