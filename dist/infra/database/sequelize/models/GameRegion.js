"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeGameRegionModel = exports.GameRegionModel = void 0;
const sequelize_1 = require("sequelize");
class GameRegionModel extends sequelize_1.Model {
}
exports.GameRegionModel = GameRegionModel;
function initializeGameRegionModel(sequelize) {
    GameRegionModel.init({
        GameId: {
            primaryKey: true,
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        RegionId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
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