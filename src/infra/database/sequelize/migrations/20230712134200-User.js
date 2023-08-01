const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("User", {
      UserId: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      FirstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      LastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      UserName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Avatar: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      DOB: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      Gender: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      MobileNumber: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      Password: {
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
    await queryInterface.dropTable("User");
  },
};
