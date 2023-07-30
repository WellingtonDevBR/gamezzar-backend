"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "GamePlatform",
      [
        {
          GameId: "8f33e16b-8747-4f1b-9a22-8a956d8d9a01",
          PlatformId: "a4a9a6af-7365-49f3-8696-9e86a6a99f01",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("GamePlatform", null, {});
  },
};
