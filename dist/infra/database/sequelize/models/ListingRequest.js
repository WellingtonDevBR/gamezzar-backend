"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeMessageModel = exports.MessageModel = void 0;
const sequelize_1 = require("sequelize");
class MessageModel extends sequelize_1.Model {
}
exports.MessageModel = MessageModel;
function initializeMessageModel(sequelize) {
    MessageModel.init({
        ListingRequestId: {
            type: sequelize_1.DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
        },
        FullName: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        Email: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        GameTitle: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: false,
        },
        Description: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: false,
        },
        Image: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: false,
        },
        Platform: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: false,
        },
        Region: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: false,
        },
        Status: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: false,
        },
    }, {
        tableName: "ListingRequest",
        sequelize: sequelize,
    });
}
exports.initializeMessageModel = initializeMessageModel;
//# sourceMappingURL=ListingRequest.js.map