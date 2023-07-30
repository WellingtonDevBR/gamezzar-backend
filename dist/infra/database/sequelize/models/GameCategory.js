"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeGameCategoryModel = exports.GameCategoryModel = void 0;
const sequelize_1 = require("sequelize");
class GameCategoryModel extends sequelize_1.Model {
}
exports.GameCategoryModel = GameCategoryModel;
function initializeGameCategoryModel(sequelize) {
    GameCategoryModel.init({
        CategoryId: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        GameId: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
    }, {
        tableName: "GameCategory",
        timestamps: true,
        sequelize,
    });
}
exports.initializeGameCategoryModel = initializeGameCategoryModel;
//# sourceMappingURL=GameCategory.js.map