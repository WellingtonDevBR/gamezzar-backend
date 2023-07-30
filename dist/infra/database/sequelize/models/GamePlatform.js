"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeGamePlatformModel = exports.GamePlatformModel = void 0;
const sequelize_1 = require("sequelize");
class GamePlatformModel extends sequelize_1.Model {
}
exports.GamePlatformModel = GamePlatformModel;
function initializeGamePlatformModel(sequelize) {
    GamePlatformModel.init({
        PlatformId: {
            type: sequelize_1.DataTypes.UUID,
            allowNull: false,
        },
        GameId: {
            type: sequelize_1.DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
        },
    }, {
        tableName: "GamePlatform",
        modelName: "Games_Platform",
        timestamps: true,
        sequelize,
    });
}
exports.initializeGamePlatformModel = initializeGamePlatformModel;
//# sourceMappingURL=GamePlatform.js.map