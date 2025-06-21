import { Request } from "express";
import { UserRole } from "./userTypes";

export interface AuthUser {
    id: number;
    username: string;
    email: string;
    rol: UserRole;
    group_id: number;
}
// Permite definir los genericos de la petición de autenticación como en `Request<Params, ResBody, ReqBody, Query>`
export type AuthRequest<
    Params = any,
    ResBody = any,
    ReqBody = any,
    ReqQuery = any
> = Request<
    Params, ResBody, ReqBody, ReqQuery
> & { user?: AuthUser };

export interface CreatePermissionRequest {
    can_create: boolean;
    can_read: boolean;
    can_update: boolean;
    can_delete: boolean;
    group_id: number;
    module_id: number;
};