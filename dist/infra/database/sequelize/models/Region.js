"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeRegionModel = exports.RegionModel = void 0;
const sequelize_1 = require("sequelize");
class RegionModel extends sequelize_1.Model {
}
exports.RegionModel = RegionModel;
function initializeRegionModel(sequelize) {
    RegionModel.init({
        RegionId: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        Name: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
    }, {
        tableName: "Region",
        timestamps: true,
        sequelize,
    });
}
exports.initializeRegionModel = initializeRegionModel;
//# sourceMappingURL=Region.js.map