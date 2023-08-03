"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeUserGameModel = exports.UserGameModel = void 0;
const sequelize_1 = require("sequelize");
class UserGameModel extends sequelize_1.Model {
}
exports.UserGameModel = UserGameModel;
function initializeUserGameModel(sequelize) {
    UserGameModel.init({
        UserId: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
            references: {
                model: "User",
                key: "UserId",
            },
        },
        GameId: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
            references: {
                model: "Game",
                key: "GameId",
            },
        },
        PlatformId: {
            type: new sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Platform",
                key: "PlatformId",
            },
        },
        RegionId: {
            type: new sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Region",
                key: "RegionId",
            },
        },
        EditionId: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
            references: {
                model: "Edition",
                key: "EditionId",
            },
        },
        Satisfaction: {
            type: new sequelize_1.DataTypes.INTEGER(),
            allowNull: false,
        },
        Disposition: {
            type: new sequelize_1.DataTypes.INTEGER(),
            allowNull: false,
        },
        DiscCondition: {
            type: new sequelize_1.DataTypes.INTEGER(),
            allowNull: false,
        },
        CoverCondition: {
            type: new sequelize_1.DataTypes.INTEGER(),
            allowNull: false,
        },
        ManualCondition: {
            type: new sequelize_1.DataTypes.INTEGER(),
            allowNull: false,
        },
        Description: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
    }, {
        tableName: "UserGame",
        modelName: "Inventory",
        timestamps: true,
        sequelize,
    });
}
exports.initializeUserGameModel = initializeUserGameModel;
//# sourceMappingURL=UserGame.js.map