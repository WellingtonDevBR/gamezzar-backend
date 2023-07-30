"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeUserGameModel = exports.UserGameModel = void 0;
const sequelize_1 = require("sequelize");
class UserGameModel extends sequelize_1.Model {
}
exports.UserGameModel = UserGameModel;
function initializeUserGameModel(sequelize) {
    UserGameModel.init({
        UserID: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
            references: {
                model: 'User',
                key: "UserID",
            },
        },
        GameID: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
            references: {
                model: 'Game',
                key: "GameID",
            },
        },
        Quantity: {
            type: new sequelize_1.DataTypes.INTEGER(),
            allowNull: false,
        },
        Status: {
            type: new sequelize_1.DataTypes.BOOLEAN(),
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
//# sourceMappingURL=UserGameModel.js.map