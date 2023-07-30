"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializePlatformModel = exports.PlatformModel = void 0;
const sequelize_1 = require("sequelize");
class PlatformModel extends sequelize_1.Model {
}
exports.PlatformModel = PlatformModel;
function initializePlatformModel(sequelize) {
    PlatformModel.init({
        PlatformID: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        Name: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
        Status: {
            type: new sequelize_1.DataTypes.BOOLEAN(),
            allowNull: true,
        },
    }, {
        tableName: "Platform",
        timestamps: true,
        sequelize,
    });
}
exports.initializePlatformModel = initializePlatformModel;
//# sourceMappingURL=PlatformModel.js.map