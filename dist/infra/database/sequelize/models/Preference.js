"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializePreferenceModel = exports.PreferenceModel = void 0;
const sequelize_1 = require("sequelize");
const { v4: uuidv4 } = require("uuid");
class PreferenceModel extends sequelize_1.Model {
}
exports.PreferenceModel = PreferenceModel;
function initializePreferenceModel(sequelize) {
    PreferenceModel.init({
        PreferenceId: {
            type: sequelize_1.DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: () => uuidv4(),
        },
        UserId: {
            type: sequelize_1.DataTypes.UUID,
            allowNull: false,
            references: {
                model: "User",
                key: "UserId",
            },
        },
        StatusMessage: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: true,
        },
        NotificationSiteEmails: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
        NotificationPartnerEmails: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        ShipmentInPerson: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        ShipmentPostal: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        ShipmentCourier: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        PlaystationNetworkId: {
            type: sequelize_1.DataTypes.STRING(16),
            allowNull: true,
        },
        XBOXLiveGamertag: {
            type: sequelize_1.DataTypes.STRING(16),
            allowNull: true,
        },
        PlaystationFive: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            validate: {
                isIn: [[1, 2, 3, 4]],
            },
        },
        PlaystationFour: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            validate: {
                isIn: [[1, 2, 3, 4]],
            },
        },
        PlaystationThree: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            validate: {
                isIn: [[1, 2, 3, 4]],
            },
        },
        XboxOne: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            validate: {
                isIn: [[1, 2, 3, 4]],
            },
        },
        Xbox360: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            validate: {
                isIn: [[1, 2, 3, 4]],
            },
        },
        WiiU: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            validate: {
                isIn: [[1, 2, 3, 4]],
            },
        },
        Wii: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            validate: {
                isIn: [[1, 2, 3, 4]],
            },
        },
        PsVita: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            validate: {
                isIn: [[1, 2, 3, 4]],
            },
        },
        Nitendo3DS: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            validate: {
                isIn: [[1, 2, 3, 4]],
            },
        },
    }, {
        sequelize,
        modelName: "Preference",
        timestamps: true,
    });
}
exports.initializePreferenceModel = initializePreferenceModel;
//# sourceMappingURL=Preference.js.map