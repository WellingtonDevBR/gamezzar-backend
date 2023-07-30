const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Platform", {
      PlatformId: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
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
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Platform");
  },
};
