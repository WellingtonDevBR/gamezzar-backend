"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeTransactionModel = exports.TransactionModel = void 0;
const sequelize_1 = require("sequelize");
class TransactionModel extends sequelize_1.Model {
}
exports.TransactionModel = TransactionModel;
function initializeTransactionModel(sequelize) {
    TransactionModel.init({
        TransactionId: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        SenderId: {
            type: new sequelize_1.DataTypes.UUID(),
            allowNull: false,
            references: {
                model: "User",
                key: "UserId",
            },
        },
        ReceiverId: {
            type: new sequelize_1.DataTypes.UUID(),
            allowNull: false,
            references: {
                model: "User",
                key: "UserId",
            },
        },
        SenderGameId: {
            type: new sequelize_1.DataTypes.UUID(),
            allowNull: false,
            references: {
                model: "Game",
                key: "GameId",
            },
        },
        ReceiverGameId: {
            type: new sequelize_1.DataTypes.UUID(),
            allowNull: false,
            references: {
                model: "Game",
                key: "GameId",
            },
        },
        Status: {
            type: new sequelize_1.DataTypes.STRING(255),
            allowNull: false,
        },
    }, {
        tableName: "Transaction",
        timestamps: true,
        sequelize,
    });
}
exports.initializeTransactionModel = initializeTransactionModel;
//# sourceMappingURL=Transaction.js.map