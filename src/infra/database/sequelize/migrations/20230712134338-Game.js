const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Game", {
      GameId: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      Title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Description: {
        type: Sequelize.STRING(2000),
        allowNull: false,
      },
      ReleaseDate: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Producer: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      OfficialLink: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Image: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      OfficialVideoLink: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Slug: {
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
    await queryInterface.dropTable("Game");
  },
};
