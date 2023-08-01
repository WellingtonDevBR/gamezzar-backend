const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "Platform",
      {
        PlatformId: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        Name: {
          type: Sequelize.STRING,
        },
        Status: {
          type: Sequelize.STRING,
        },
        UpdatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        CreatedAT: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        initialAutoIncrement: 1,
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Platform");
  },
};
