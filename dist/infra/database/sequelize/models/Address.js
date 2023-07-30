"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeAddressModel = exports.AddressModel = void 0;
const sequelize_1 = require("sequelize");
class AddressModel extends sequelize_1.Model {
}
exports.AddressModel = AddressModel;
function initializeAddressModel(sequelize) {
    AddressModel.init({
        AddressId: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        UserId: {
            type: sequelize_1.DataTypes.UUID,
            allowNull: false,
        },
        Address: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
        Country: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
    }, {
        tableName: "Address",
        timestamps: true,
        sequelize,
    });
}
exports.initializeAddressModel = initializeAddressModel;
//# sourceMappingURL=Address.js.map