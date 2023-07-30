const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Wishlist", {
      WishlistId: {
        type: Sequelize.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      GameId: {
        type: Sequelize.UUID,
        references: {
          model: "Game",
          key: "GameId",
        },
      },
      UserId: {
        type: Sequelize.UUID,
        references: {
          model: "User",
          key: "UserId",
        },
      },
      InterestLevel: {
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
    await queryInterface.dropTable("Wishlist");
  },
};
