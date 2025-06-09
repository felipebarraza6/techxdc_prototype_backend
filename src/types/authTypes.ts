import { UserRole } from "./userTypes";

export interface AuthRequest extends Request {
    user?: {
        id: number;
        username: string;
        email: string;
        rol: UserRole;
        group_id: number;
    };
};

export interface CreatePermissionRequest {
    can_create: boolean;
    can_read: boolean;
    can_update: boolean;
    can_delete: boolean;
    group_id: number;
    module_id: number;
};