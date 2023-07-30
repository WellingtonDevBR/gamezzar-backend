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
      InterestedUserId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "User",
          key: "UserId",
        },
      },
      InterestedGameId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Game",
          key: "GameId",
        },
      },
      OwnerUserId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "User",
          key: "UserId",
        },
      },
      OwnerGameId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Game",
          key: "GameId",
        },
      },
      Status: {
        type: Sequelize.INTEGER,
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
