"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeUserModel = exports.UserModel = void 0;
const sequelize_1 = require("sequelize");
class UserModel extends sequelize_1.Model {
}
exports.UserModel = UserModel;
function initializeUserModel(sequelize) {
    UserModel.init({
        UserId: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        FirstName: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
        LastName: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
        UserName: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
        Avatar: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: true,
        },
        Email: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
        Password: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
    }, {
        tableName: "User",
        timestamps: true,
        sequelize,
    });
}
exports.initializeUserModel = initializeUserModel;
//# sourceMappingURL=User.js.map