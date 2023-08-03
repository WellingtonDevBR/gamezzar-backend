const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Propose", {
      ProposeId: {
        type: Sequelize.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      BidderId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "User",
          key: "UserId",
        },
      },
      BidderGameId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Game",
          key: "GameId",
        },
      },
      ReceiverId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "User",
          key: "UserId",
        },
      },
      ReceiverGameId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Game",
          key: "GameId",
        },
      },
      Status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      UpdatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      CreatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Propose");
  },
};
