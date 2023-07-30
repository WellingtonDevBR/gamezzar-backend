const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Chat", {
      ChatId: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      User1Id: {
        type: Sequelize.UUID,
        references: {
          model: "User",
          key: "UserId",
        },
      },
      User2Id: {
        type: Sequelize.UUID,
        references: {
          model: "User",
          key: "UserId",
        },
      },
      GameId: {
        type: Sequelize.UUID,
        references: {
          model: "Game",
          key: "GameId",
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
    await queryInterface.dropTable("Chat");
  },
};
