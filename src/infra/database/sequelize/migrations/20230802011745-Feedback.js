const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Feedback", {
      FeedbackId: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      TransactionId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Transaction",
          key: "TransactionId",
        },
      },
      Rating: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Comment: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      GiverId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "User",
          key: "UserId",
        },
      },
      ReceiverId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "User",
          key: "UserId",
        },
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
    await queryInterface.dropTable("Feedback");
  },
};
