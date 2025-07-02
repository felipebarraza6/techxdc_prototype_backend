import User from "./User";
import Group from "./Group";
import Task from "./Task";
import Permission from "./Permission";
import FileType from "./FileType";
import File from "./File";
import CatchmentPoint from "./CatchmentPoint";
import ResponseTicket from "./ResponseTicket";
import Quotation from "./Quotation";
import Clients from "./Clients";
import Comuna from "./Comuna";
import Project from "./Projects";
import FinanceMovement from "./financeMovement";

export const applyAssociations = () => {
    // User --- Group
    Group.hasMany(User, {
        foreignKey: "group_id", as: "users"
    });
    User.belongsTo(Group, {
        foreignKey: "group_id", as: "group"
    });

    // User --- Task
    User.hasMany(Task, {
        foreignKey: "created_by", as: "createdTasks"
    });
    Task.belongsTo(User, {
        foreignKey: "created_by", as: "creator"
    });

    // Group --- Permission
    Group.hasMany(Permission, {
        foreignKey: "group_id", as: "permissions"
    });
    Permission.belongsTo(Group, {
        foreignKey: "group_id", as: "group"
    });

    // User --- File (uploader)
    User.hasMany(File, {
        foreignKey: 'uploaded_by',
        as: 'uploadedFiles',
    });
    File.belongsTo(User, {
        foreignKey: 'uploaded_by',
        as: 'uploader',
    });


    // FileType --- File
    FileType.hasMany(File, {
        foreignKey: "file_type_id", as: "files"
    });
    File.belongsTo(FileType, {
        foreignKey: "file_type_id", as: "fileType"
    });

    // CatchmentPoint --- File
    CatchmentPoint.hasMany(File, {
        foreignKey: 'catchment_point_id',
        as: 'files',
    });
    File.belongsTo(CatchmentPoint, {
        foreignKey: 'catchment_point_id',
        as: 'catchmentPoint',
    });

    // ResponseTicket --- File
    ResponseTicket.hasMany(File, {
        foreignKey: 'response_ticket_id',
        as: 'files',
    });
    File.belongsTo(ResponseTicket, {
        foreignKey: 'response_ticket_id',
        as: 'responseTicket',
    });

    // Quotation --- File
    Quotation.hasMany(File, {
        foreignKey: 'quotation_id',
        as: 'files',
    });
    File.belongsTo(Quotation, {
        foreignKey: 'quotation_id',
        as: 'quotation',
    });

    Comuna.hasMany(Project, {
        foreignKey: "comunaId",
        sourceKey: 'id',
        as: "projectComuna",
    });

    Project.belongsTo(Comuna, {
        foreignKey: "comunaId",
        targetKey: "id",
        as: "comuna",
    });

    Clients.hasMany(Project, {
        foreignKey: "clientId",
        sourceKey: 'id',
        as: "projectClient",
    });

    Project.belongsTo(Clients, {
        foreignKey: "clientId",
        targetKey: "id",
        as: "Clients",
    });

    Project.hasMany(CatchmentPoint, {
        foreignKey: "projectId",
        sourceKey: 'id',
        as: "projectCatchmentPoint",
    });

    CatchmentPoint.belongsTo(Project, {
        foreignKey: "projectId",
        targetKey: "id",
        as: "Project",
    });

    User.hasMany(CatchmentPoint, {
        foreignKey: "ownerUser",
        sourceKey: 'id',
        as: "userCatchmentPoint",
    });

    CatchmentPoint.belongsTo(User, {
        foreignKey: "ownerUser",
        targetKey: "id",
        as: "User",
    });

    Project.hasMany(FinanceMovement, {
        foreignKey: "projectId",
        sourceKey: 'id',
        as: "projectFinanceMovement",
    });

    FinanceMovement.belongsTo(Project, {
        foreignKey: "projectId",
        targetKey: "id",
        as: "Project",
    });

    Project.hasMany(Quotation, {
        foreignKey: "linkedProject",
        sourceKey: 'id',
        as: "projectQuotation",
    });

    Quotation.belongsTo(Project, {
        foreignKey: "linkedProject",
        targetKey: "id",
        as: "Project",
    });

    User.hasMany(Quotation, {
        foreignKey: "createdBy",
        sourceKey: 'id',
        as: "userQuotation",
    });

    Quotation.belongsTo(User, {
        foreignKey: "createdBy",
        targetKey: "id",
        as: "User",
    });

    Clients.hasMany(Quotation, {
        foreignKey: "clientId",
        sourceKey: 'id',
        as: "clientQuotation",
    });

    Quotation.belongsTo(Clients, {
        foreignKey: "clientId",
        targetKey: "id",
        as: "Client",
    });
}