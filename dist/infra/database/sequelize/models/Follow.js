"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeFollowModel = exports.FollowModel = void 0;
const sequelize_1 = require("sequelize");
class FollowModel extends sequelize_1.Model {
}
exports.FollowModel = FollowModel;
function initializeFollowModel(sequelize) {
    FollowModel.init({
        FollowId: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        FollowerId: {
            type: new sequelize_1.DataTypes.UUID(),
            allowNull: false,
            references: {
                model: "User",
                key: "UserId",
            },
        },
        FolloweeId: {
            type: new sequelize_1.DataTypes.UUID(),
            allowNull: false,
            references: {
                model: "User",
                key: "UserId",
            },
        },
    }, {
        tableName: "Follow",
        timestamps: true,
        sequelize,
    });
}
exports.initializeFollowModel = initializeFollowModel;
//# sourceMappingURL=Follow.js.map