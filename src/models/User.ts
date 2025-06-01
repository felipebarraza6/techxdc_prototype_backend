import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

interface UserAttributes {
    id: number;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    password_hash: string;
    is_verified: boolean;
    verify_token: string;
    verify_token_expiration: Date;
    rol: 'admin' | 'client' | 'inner_user' | 'viewer_user';
    is_active: boolean;
    last_login: Date;
    last_password_change: Date;
    login_attempts: number;
    group_id: number;
    createdAt?: Date;
    updatedAt?: Date;
};

class User extends Model<UserAttributes> implements UserAttributes {
    public id!: number;
    public username!: string;
    public email!: string;
    public first_name!: string;
    public last_name!: string;
    public password_hash!: string;
    public is_verified!: boolean;
    public verify_token!: string;
    public verify_token_expiration!: Date;
    public rol!: 'admin' | 'client' | 'inner_user' | 'viewer_user';
    public is_active!: boolean;
    public last_login!: Date;
    public last_password_change!: Date;
    public login_attempts!: number;
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
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password_hash: {
            type: DataTypes.STRING,
            allowNull: false,
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
            type: DataTypes.ENUM('admin', 'client', 'inner_user', 'viewer_user'),
            allowNull: false,
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
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        group_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: 'User',
        tableName: 'users',
        timestamps: false,
    }
);
export default User;