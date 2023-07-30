"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeGameRegionModel = exports.GameRegionModel = void 0;
const sequelize_1 = require("sequelize");
class GameRegionModel extends sequelize_1.Model {
}
exports.GameRegionModel = GameRegionModel;
function initializeGameRegionModel(sequelize) {
    GameRegionModel.init({
        RegionId: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        GameId: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
    }, {
        tableName: "GameRegion",
        modelName: "Games_Region",
        timestamps: true,
        sequelize,
    });
}
exports.initializeGameRegionModel = initializeGameRegionModel;
//# sourceMappingURL=GameRegion.js.map