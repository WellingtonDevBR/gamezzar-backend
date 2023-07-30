"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeMessageModel = exports.MessageModel = void 0;
const sequelize_1 = require("sequelize");
class MessageModel extends sequelize_1.Model {
}
exports.MessageModel = MessageModel;
function initializeMessageModel(sequelize) {
    MessageModel.init({
        MessageId: {
            type: sequelize_1.DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
        },
        SenderId: {
            type: sequelize_1.DataTypes.UUID,
            allowNull: false,
        },
        ReceiverId: {
            type: sequelize_1.DataTypes.UUID,
            allowNull: false,
        },
        Content: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: false,
        },
    }, {
        tableName: "Message",
        sequelize: sequelize,
    });
}
exports.initializeMessageModel = initializeMessageModel;
//# sourceMappingURL=Message.js.map