"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeFeedbackModel = exports.FeedbackModel = void 0;
const sequelize_1 = require("sequelize");
class FeedbackModel extends sequelize_1.Model {
}
exports.FeedbackModel = FeedbackModel;
function initializeFeedbackModel(sequelize) {
    FeedbackModel.init({
        FeedbackId: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        TransactionId: {
            type: new sequelize_1.DataTypes.UUID(),
            allowNull: false,
            references: {
                model: "Transaction",
                key: "TransactionId",
            },
        },
        Rating: {
            type: new sequelize_1.DataTypes.STRING(255),
            allowNull: false,
        },
        Comment: {
            type: new sequelize_1.DataTypes.STRING(255),
            allowNull: true,
        },
        GiverId: {
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
        Status: {
            type: new sequelize_1.DataTypes.STRING(255),
            allowNull: false,
        },
    }, {
        tableName: "Feedback",
        timestamps: true,
        sequelize,
    });
}
exports.initializeFeedbackModel = initializeFeedbackModel;
//# sourceMappingURL=Feedback.js.map