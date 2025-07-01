import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../config/database";
import { UserRole } from "../types/userTypes";
import Group from "./Group";

interface UserAttributes {
    id: number;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    password: string;
    is_verified: boolean;
    verify_token?: string | null;
    verify_token_expiration?: Date | null;
    rol: UserRole;
    is_active: boolean;
    last_login?: Date | null;
    last_password_change?: Date | null;
    login_attempts: number;
    group_id: number;
    createdAt?: Date;
    updatedAt?: Date;
};

interface UserCreationAttributes extends Optional<UserAttributes,
    'id' | 'is_verified' | 'verify_token' | 'verify_token_expiration' | 'is_active' | 'last_login' |
    'last_password_change' | 'login_attempts' | 'createdAt' | 'updatedAt'
> { }
class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public id!: number;
    public username!: string;
    public email!: string;
    public first_name!: string;
    public last_name!: string;
    public password!: string;
    public is_verified: boolean = false;
    public verify_token!: string | null;
    public verify_token_expiration!: Date | null;
    public rol!: UserRole;
    public is_active: boolean = true;
    public last_login!: Date | null;
    public last_password_change!: Date | null;
    public login_attempts: number = 0;
    public group_id!: number;

    // Timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

};

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        is_verified: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        verify_token: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        verify_token_expiration: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        rol: {
            type: DataTypes.ENUM(...Object.values(UserRole)),
            allowNull: false,
            defaultValue: UserRole.CLIENT,
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        last_login: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        last_password_change: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        login_attempts: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        group_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Group,
                key: 'id',
            },
        },
    },
    {
        sequelize,
        modelName: 'User',
        tableName: 'users',
        timestamps: true,
    }
);
export default User;