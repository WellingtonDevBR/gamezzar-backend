const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("GameCategory", {
      GameID: {
        type: Sequelize.UUID,
        references: {
          model: "Game",
          key: "GameID",
        },
      },
      CategoryID: {
        type: Sequelize.UUID,
        references: {
          model: "Category",
          key: "CategoryID",
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
    await queryInterface.dropTable("GameCategory");
  },
};
