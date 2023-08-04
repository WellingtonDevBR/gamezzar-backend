"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeProposeModel = exports.ProposeModel = void 0;
const sequelize_1 = require("sequelize");
class ProposeModel extends sequelize_1.Model {
}
exports.ProposeModel = ProposeModel;
function initializeProposeModel(sequelize) {
    ProposeModel.init({
        ProposeId: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        BidderId: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
            references: {
                model: "User",
                key: "UserId",
            },
        },
        ReceiverId: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
            references: {
                model: "User",
                key: "UserId",
            },
        },
        BidderGameId: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
            references: {
                model: "Game",
                key: "Gameid",
            },
        },
        ReceiverGameId: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
            references: {
                model: "Game",
                key: "Gameid",
            },
        },
        Status: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
    }, {
        tableName: "Propose",
        timestamps: true,
        sequelize,
    });
}
exports.initializeProposeModel = initializeProposeModel;
//# sourceMappingURL=Propose.js.map