import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../config/database";
import { TypeQuotation } from "../types/quotationTypes";

interface QuotationAttributes {
    id: number;
    clientId: number;
    status: TypeQuotation;
    estimatedAmount: number;
    marginEstimate: number;
    linkedProject: number;
    createdBy: number;
};

export type QuotationCreationAttributes = Optional<QuotationAttributes, 'id'>;

class Quotation extends Model<QuotationAttributes, QuotationCreationAttributes> implements QuotationAttributes {
    public id!: number;
    public clientId!: number;
    public status!: TypeQuotation;
    public linkedProject!: number;
    public estimatedAmount!: number;
    public marginEstimate!: number;
    public createdBy!: number;
};

Quotation.init(
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
                model: 'Clients',
                key: 'id',
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
        },
        status: {
            type: DataTypes.ENUM(...Object.values(TypeQuotation)),
            allowNull: false,
        },
        linkedProject: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Projects',
                key: 'id',
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
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
                model: 'Users',
                key: 'id',
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
        },
    },
    {
        sequelize,
        modelName: 'Quotation',
        tableName: 'quotation',
        timestamps: true,
    }
);


export default Quotation;