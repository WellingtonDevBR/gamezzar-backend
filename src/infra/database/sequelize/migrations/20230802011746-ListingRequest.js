const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("ListingRequestId", {
      ListingRequestId: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      FullName: {
        allowNull: false,
        type: Sequelize.STRING,
        
      },
      Email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      GameTitle: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Description: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      Image: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      Platform: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Region: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Status: {
        allowNull: false,
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("ListingRequestId");
  },
};
