"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Region",
      [
        {
          Name: "Oceania",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          Name: "America",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          Name: "Europe",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          Name: "Asia",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
      ],
      {},
      {
        autoincrement: true,
        needIdentityInsertWrapper: true,
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Region", null, {});
  },
};
