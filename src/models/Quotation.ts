import { Model, DataTypes, DecimalDataType, ForeignKey, Optional } from "sequelize";
import sequelize from "../config/database";
import Project from "./Projects";
import User from "./User";
import File from "./File";
import Client from "./Client"

interface quotationAttributes {
    id: number;
    clientId: ForeignKey<Client['id']>;
    status: 'draft' | 'sent' | 'approved' | 'rejected';
    estimatedAmount: DecimalDataType;
    marginEstimate: DecimalDataType;
    linkedProject: ForeignKey<Project['id']>;
    createdBy: ForeignKey<User['id']>;
    file: ForeignKey<File['id']>;
};

export type QuotationCreationAttributes = Optional<quotationAttributes, 'id'>;

class quotation extends Model<quotationAttributes, QuotationCreationAttributes> implements quotationAttributes {
    public id!: number;
    public clientId!: ForeignKey<Client['id']>;
    public status!: 'draft' | 'sent' | 'approved' | 'rejected';
    public linkedProject!: ForeignKey<Project['id']>;
    public estimatedAmount!: DecimalDataType;   
    public marginEstimate!: DecimalDataType;
    public createdBy!: ForeignKey<User['id']>;
    public file!: ForeignKey<File['id']>;
};

quotation.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        clientId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Client', 
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        status: {
            type: DataTypes.ENUM('draft', 'sent', 'approved','rejected'),
            allowNull: false,
        },
        linkedProject: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Project', 
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        estimatedAmount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        marginEstimate: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        createdBy: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'User', 
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        }, 
        file: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'files', 
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },       
    },
    {
        sequelize,
        modelName: 'Quotation',
        tableName: 'quotation',
        timestamps: true,
    }
);

Project.hasMany(quotation, {
    foreignKey: "linkedProject",
    sourceKey: 'id',
    as: "projectQuotation",
});

quotation.belongsTo(Project, {
    foreignKey: "linkedProject",
    targetKey: "id",
    as: "Project",
});

User.hasMany(quotation, {
    foreignKey: "createdBy",
    sourceKey: 'id',
    as: "userQuotation",
});

quotation.belongsTo(User, {
    foreignKey: "createdBy",
    targetKey: "id",
    as: "User",
});

Client.hasMany(quotation, {
    foreignKey: "clientId",
    sourceKey: 'id',
    as: "clientQuotation",
});

quotation.belongsTo(Client, {
    foreignKey: "clientId",
    targetKey: "id",
    as: "Client",
});

//consultar x File como se relaciona con quotation

export default quotation;