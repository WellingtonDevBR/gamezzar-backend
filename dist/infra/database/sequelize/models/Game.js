"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeGameModel = exports.GameModel = void 0;
const sequelize_1 = require("sequelize");
class GameModel extends sequelize_1.Model {
}
exports.GameModel = GameModel;
function initializeGameModel(sequelize) {
    GameModel.init({
        GameId: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        Title: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
        Description: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
        ReleaseDate: {
            type: new sequelize_1.DataTypes.DATE(),
            allowNull: false,
        },
        Producer: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
        OfficialLink: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
        Image: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
        OfficialVideoLink: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
        Slug: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
    }, {
        tableName: "Game",
        timestamps: true,
        sequelize,
    });
}
exports.initializeGameModel = initializeGameModel;
//# sourceMappingURL=Game.js.map