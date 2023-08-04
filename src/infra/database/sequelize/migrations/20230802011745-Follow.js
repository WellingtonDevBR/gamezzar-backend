const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Follow", {
      FollowId: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      FollowerId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "User",
          key: "UserId",
        },
      },
      FolloweeId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "User",
          key: "UserId",
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
    await queryInterface.dropTable("Follow");
  },
};
