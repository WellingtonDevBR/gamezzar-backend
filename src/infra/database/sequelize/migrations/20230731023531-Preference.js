const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Preference", {
      PreferenceId: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      UserId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "User",
          key: "UserId",
        },
      },
      StatusMessage: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      NotificationSiteEmails: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      NotificationPartnerEmails: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      ShipmentInPerson: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      ShipmentPostal: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      ShipmentCourier: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      PlaystationNetworkId: {
        type: DataTypes.STRING(16),
        allowNull: true,
      },
      XBOXLiveGamertag: {
        type: DataTypes.STRING(16),
        allowNull: true,
      },
      PlaystationFive: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
          isIn: [[1, 2, 3, 4]],
        },
      },
      PlaystationFour: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
          isIn: [[1, 2, 3, 4]],
        },
      },
      PlaystationThree: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
          isIn: [[1, 2, 3, 4]],
        },
      },
      XboxOne: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
          isIn: [[1, 2, 3, 4]],
        },
      },
      Xbox360: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
          isIn: [[1, 2, 3, 4]],
        },
      },
      WiiU: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
          isIn: [[1, 2, 3, 4]],
        },
      },
      Wii: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
          isIn: [[1, 2, 3, 4]],
        },
      },
      PsVita: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
          isIn: [[1, 2, 3, 4]],
        },
      },
      Nitendo3DS: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
          isIn: [[1, 2, 3, 4]],
        },
      },
      UpdatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      CreatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Preference");
  },
};
