const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("UserGame", {
      UserId: {
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
      PlatformId: {
        type: Sequelize.UUID,
        references: {
          model: "Platform",
          key: "PlatformId",
        },
      },
      RegionId: {
        type: Sequelize.UUID,
        references: {
          model: "Region",
          key: "RegionId",
        },
      },
      EditionId: {
        type: Sequelize.UUID,
        references: {
          model: "Edition",
          key: "EditionId",
        },
      },
      Disposition: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Satisfaction: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      DiscCondition: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      CoverCondition: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ManualCondition: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Description: {
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
    await queryInterface.dropTable("UserGame");
  },
};
