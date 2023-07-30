const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("GamePlatform", {
      GameId: {
        type: Sequelize.UUID,
        references: {
          model: "Game",
          key: "GameId",
        },
      },
      PlatformId: {
        type: Sequelize.UUID,
        references: {
          model: "Platform",
          key: "PlatformId",
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
    await queryInterface.dropTable("GamePlatform");
  },
};
