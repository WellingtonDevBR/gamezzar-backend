const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Message", {
      MessageId: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      SenderId: {
        type: Sequelize.UUID,
        references: {
          model: "User",
          key: "UserId",
        },
      },
      ReceiverId: {
        type: Sequelize.UUID,
        references: {
          model: "User",
          key: "UserId",
        },
      },
      Content: {
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
    await queryInterface.dropTable("Message");
  },
};
