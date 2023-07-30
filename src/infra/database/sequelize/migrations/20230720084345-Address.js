const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Address", {
      AddressId: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      UserId: {
        type: Sequelize.UUID,
        references: {
          model: "User",
          key: "UserId",
        },
      },
      Address: {
        type: Sequelize.STRING,
      },
      Country: {
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
    await queryInterface.dropTable("Address");
  },
};
