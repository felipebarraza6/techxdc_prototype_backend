import User from "./User";
import Group from "./Group";
import Task from "./Task";
import Permission from "./Permission";
import FileType from "./FileType";
import File from "./File";
import CatchmentPoint from "./CatchmentPoint";
import ResponseTicket from "./ResponseTicket";
import Quotation from "./Quotation";

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
}