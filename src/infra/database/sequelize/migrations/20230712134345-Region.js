const { DataTypes, QueryTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "Region",
      {
        RegionId: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        Name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        UpdatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        CreatedAt: {
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
    await queryInterface.dropTable("Region");
  },
};
