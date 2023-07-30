const { DataTypes } = require("sequelize");


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Region", {
      RegionId: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
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
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Region");
  },
};
