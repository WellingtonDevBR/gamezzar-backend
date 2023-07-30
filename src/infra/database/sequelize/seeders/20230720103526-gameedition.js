"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "GameEdition",
      [
        {
          GameId: "8f33e16b-8747-4f1b-9a22-8a956d8d9a01",
          EditionId: "3c7b8da6-7d68-4a7d-96b5-855dc2d1ef01",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("GameEdition", null, {});
  },
};
