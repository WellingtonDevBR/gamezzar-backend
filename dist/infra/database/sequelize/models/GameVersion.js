"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeGameVersionModel = exports.GameVersionModel = void 0;
const sequelize_1 = require("sequelize");
class GameVersionModel extends sequelize_1.Model {
}
exports.GameVersionModel = GameVersionModel;
function initializeGameVersionModel(sequelize) {
    GameVersionModel.init({
        VersionId: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        GameId: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
    }, {
        tableName: "GameVersion",
        timestamps: true,
        sequelize,
    });
}
exports.initializeGameVersionModel = initializeGameVersionModel;
//# sourceMappingURL=GameVersion.js.map