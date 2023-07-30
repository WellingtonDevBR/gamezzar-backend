"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "GameCategory",
      [
        {
          GameId: "8f33e16b-8747-4f1b-9a22-8a956d8d9a01",
          CategoryId: "23a94753-0bbf-4dc5-9e99-6bea7142cc84",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("GameCategory", null, {});
  },
};
