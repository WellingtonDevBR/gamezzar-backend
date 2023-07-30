"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeChatModel = exports.ChatModel = void 0;
const sequelize_1 = require("sequelize");
class ChatModel extends sequelize_1.Model {
}
exports.ChatModel = ChatModel;
function initializeChatModel(sequelize) {
    ChatModel.init({
        ChatId: {
            type: sequelize_1.DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
        },
        User1Id: {
            type: sequelize_1.DataTypes.UUID,
            allowNull: false,
        },
        User2Id: {
            type: sequelize_1.DataTypes.UUID,
            allowNull: false,
        },
        GameId: {
            type: sequelize_1.DataTypes.UUID,
            allowNull: false,
        },
    }, {
        tableName: "Chat",
        sequelize: sequelize,
    });
}
exports.initializeChatModel = initializeChatModel;
//# sourceMappingURL=Chat.js.map