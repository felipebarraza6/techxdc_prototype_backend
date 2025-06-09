export enum UserRole {
    ADMIN = "admin",
    CLIENT = "client",
    INNER_USER = "inner_user",
    VIEWER_USER = "viewer_user"
}

export interface CreateUserRequest{
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    password: string;
    rol: UserRole;
    group_id: number;
}