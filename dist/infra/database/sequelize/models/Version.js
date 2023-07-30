"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeVersionModel = exports.VersionModel = void 0;
const sequelize_1 = require("sequelize");
class VersionModel extends sequelize_1.Model {
}
exports.VersionModel = VersionModel;
function initializeVersionModel(sequelize) {
    VersionModel.init({
        VersionID: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        Name: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
    }, {
        tableName: "Version",
        timestamps: true,
        sequelize,
    });
}
exports.initializeVersionModel = initializeVersionModel;
//# sourceMappingURL=Version.js.map