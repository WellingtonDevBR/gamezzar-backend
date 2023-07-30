"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeGameEditionModel = exports.GameEditionModel = void 0;
const sequelize_1 = require("sequelize");
class GameEditionModel extends sequelize_1.Model {
}
exports.GameEditionModel = GameEditionModel;
function initializeGameEditionModel(sequelize) {
    GameEditionModel.init({
        EditionId: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        GameId: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
    }, {
        tableName: "GameEdition",
        modelName: "Games_Edition",
        timestamps: true,
        sequelize,
    });
}
exports.initializeGameEditionModel = initializeGameEditionModel;
//# sourceMappingURL=GameEdition.js.map