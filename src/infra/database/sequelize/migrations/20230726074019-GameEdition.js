const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("GameEdition", {
      GameId: {
        type: Sequelize.UUID,
        references: {
          model: "Game",
          key: "GameId",
        },
      },
      EditionId: {
        type: Sequelize.UUID,
        references: {
          model: "Edition",
          key: "EditionId",
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
    await queryInterface.dropTable("GameEdition");
  },
};
