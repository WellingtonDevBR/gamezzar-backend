"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeAddressModel = exports.AddressModel = void 0;
const sequelize_1 = require("sequelize");
class AddressModel extends sequelize_1.Model {
}
exports.AddressModel = AddressModel;
function initializeAddressModel(sequelize) {
    AddressModel.init({
        AddressID: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        Address: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
        Number: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: true,
        },
        Complement: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
        City: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
        State: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
        ZipCode: {
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
//# sourceMappingURL=AddressModel.js.map