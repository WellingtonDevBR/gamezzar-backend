"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "GameRegion",
      [
        {
          GameId: "8f33e16b-8747-4f1b-9a22-8a956d8d9a01",
          RegionId: "19db8a17-23f7-41d0-91f7-9f4c8f38d5a5",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("GameRegion", null, {});
  },
};
