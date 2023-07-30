"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeEditionModel = exports.EditionModel = void 0;
const sequelize_1 = require("sequelize");
class EditionModel extends sequelize_1.Model {
}
exports.EditionModel = EditionModel;
function initializeEditionModel(sequelize) {
    EditionModel.init({
        EditionId: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        Name: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
    }, {
        tableName: "Edition",
        timestamps: true,
        sequelize,
    });
}
exports.initializeEditionModel = initializeEditionModel;
//# sourceMappingURL=Edition.js.map