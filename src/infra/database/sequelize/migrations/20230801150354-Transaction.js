const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Transaction", {
      TransactionId: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      BidderId: {
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
      BidderGameId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Game",
          key: "GameId",
        },
      },
      ReceiverGameId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Game",
          key: "GameId",
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
    await queryInterface.dropTable("Transaction");
  },
};
