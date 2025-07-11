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
import Ticket from "./Tickets";
import TypeContact from "./TypeContact";
import Module from "./Modules";
import ClientModule from "./ClientModule";
import Contact from "./Contacts";
import Feedback from "./Feedback";
import CatchmentPointViewers from "./CatchmentPointViewers";

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

    // Ticket --- created_by (User)
    Ticket.belongsTo(User, {
        foreignKey: "created_by",
        as: "creator"
    });

    // Ticket --- designated (User)
    Ticket.belongsTo(User, {
        foreignKey: "designated",
        as: "assignedUser"
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

    ResponseTicket.belongsTo(Ticket, {
        foreignKey: "ticket_id",
        as: "ticket",
    });
    Ticket.hasMany(ResponseTicket, {
        foreignKey: "ticket_id",
        as: "responses",
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

    // Client --- Contact
    Clients.hasMany(Contact, {
        foreignKey: "id_client",
        as: "contacts",
    });

    Contact.belongsTo(Clients, {
        foreignKey: "id_client",
        as: "client",
    });

    // Contact --- TypeContact
    Contact.belongsTo(TypeContact, {
        foreignKey: "type",
        as: "typeContact",
    });
    TypeContact.hasMany(Contact, {
        foreignKey: "type",
        as: "contactsWithThisType",
    });

    // ClientModule --- Module
    ClientModule.belongsTo(Module, {
        foreignKey: "module_id",
        as: "module",
    });

    // Feedback --- Ticket
    Feedback.belongsTo(Ticket, {
        foreignKey: "ticket_id",
        as: "ticket",
    });

    // Feedback --- Client
    Feedback.belongsTo(Clients, {
        foreignKey: "client_id",
        as: "client",
    });

    // Module --- ClientModule
    Module.hasMany(ClientModule, {
        foreignKey: "module_id",
        as: "clientModules",
    });

    CatchmentPoint.belongsToMany(User, {
        through: CatchmentPointViewers,
        as: "viewers",
        foreignKey: "catchment_point_id",
        otherKey: "user_id",
    });

    User.belongsToMany(CatchmentPoint, {
        through: CatchmentPointViewers,
        as: "viewedCatchmentPoints",
        foreignKey: "user_id",
         otherKey: "catchment_point_id",
    });
}